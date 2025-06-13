import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseFunctionsUrl = process.env.NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL;

if (!supabaseUrl) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");
}
if (!supabaseAnonKey) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY");
}
if (!supabaseFunctionsUrl) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  functions: {
    url: supabaseFunctionsUrl,
  },
});