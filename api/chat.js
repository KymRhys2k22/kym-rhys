export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey =
    process.env.VITE_OPENAI_API_KEY ||
    process.env.OPENAI_API_KEY ||
    "sk-ZYNE7WRI8MeQrTd3WW36agMxIx7cZYEET7qRvmD2e8AvQqFB";

  try {
    const response = await fetch('https://api.tokenrouter.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: typeof req.body === 'string' ? req.body : JSON.stringify(req.body),
    });

    res.statusCode = response.status;
    res.setHeader('Content-Type', response.headers.get('content-type') || 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');

    if (!response.ok) {
      const errorText = await response.text();
      return res.end(errorText);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value, { stream: true }));
    }
    res.end();
  } catch (error) {
    console.error("Vercel Chat API Error:", error);
    res.status(500).json({ error: error.message });
  }
}
