
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vyygbbqfnvpafgsxwrsj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eWdiYnFmbnZwYWZnc3h3cnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3Mzk2MDAsImV4cCI6MjA1NzMxNTYwMH0.-AAsjAmIt8-QZzLsJB-sq5WoAGj0C71AzXVmb-nmyvs";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);
