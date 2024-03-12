import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hblgqqeuqfzbwedknsky.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibGdxcWV1cWZ6YndlZGtuc2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTU2NzUsImV4cCI6MjAyNTI5MTY3NX0.9EAsZETLT1HvLHL5YoVdtp8PVcAnVhD7sJuQMIAJeKU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
