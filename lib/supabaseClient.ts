import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key';

// Crée un client compatible SSR/CSR; la persistance session côté serveur est désactivée
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: typeof window !== 'undefined' }
});

export default supabase;
