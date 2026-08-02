const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

/**
 * Returns the Supabase Edge Function chat endpoint URL.
 * Prefers VITE_SUPABASE_FUNCTION_URL,
 * falls back to `${VITE_SUPABASE_URL}/functions/v1/chat`,
 * or defaults to `/api/chat` for local fallback.
 */
export const CHAT_ENDPOINT = import.meta.env.VITE_SUPABASE_FUNCTION_URL
  ? import.meta.env.VITE_SUPABASE_FUNCTION_URL
  : supabaseUrl && !supabaseUrl.includes("your-supabase-project")
  ? `${supabaseUrl}/functions/v1/chat`
  : "/api/chat";

/**
 * Headers required for invoking Supabase Edge Functions with optional anon key authorization.
 */
export const getSupabaseHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (supabaseAnonKey && !supabaseAnonKey.includes("your-anon-key")) {
    headers["Authorization"] = `Bearer ${supabaseAnonKey}`;
    headers["apikey"] = supabaseAnonKey;
  }
  return headers;
};
