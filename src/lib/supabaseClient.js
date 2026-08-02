const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://ngwyczzqsquzuwcehbia.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_qqKzPHGvtssbzFEADexIMA_rDltNS_6";

/**
 * Returns the Supabase Edge Function chat endpoint URL.
 * Prefers VITE_SUPABASE_FUNCTION_URL,
 * falls back to `${supabaseUrl}/functions/v1/chat`.
 */
export const CHAT_ENDPOINT = import.meta.env.VITE_SUPABASE_FUNCTION_URL
  ? import.meta.env.VITE_SUPABASE_FUNCTION_URL
  : `${supabaseUrl}/functions/v1/chat`;

/**
 * Headers required for invoking Supabase Edge Functions.
 */
export const getSupabaseHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (supabaseAnonKey) {
    headers["Authorization"] = `Bearer ${supabaseAnonKey}`;
    headers["apikey"] = supabaseAnonKey;
  }
  return headers;
};
