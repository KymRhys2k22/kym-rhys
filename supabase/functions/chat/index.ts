const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const apiKey =
      Deno.env.get("OPENAI_API_KEY") ||
      Deno.env.get("VITE_OPENAI_API_KEY") ||
      "sk-ZYNE7WRI8MeQrTd3WW36agMxIx7cZYEET7qRvmD2e8AvQqFB";

    const requestBody = await req.text();

    const response = await fetch(
      "https://api.tokenrouter.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: requestBody,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(errorText, {
        status: response.status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    // Pipe response stream through TransformStream to prevent memory accumulation in Deno
    const { readable, writable } = new TransformStream();
    if (response.body) {
      response.body.pipeTo(writable).catch((err) => {
        console.error("Stream pipe error:", err);
      });
    } else {
      writable.getWriter().close();
    }

    return new Response(readable, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Supabase Edge Function Chat Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
