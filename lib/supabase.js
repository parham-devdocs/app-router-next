import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dlgrfzrehzqusmyqsjxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZ3JmenJlaHpxdXNteXFzanh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1NjA1OTcsImV4cCI6MjA0ODEzNjU5N30.oyOJNpaiugVuX4kZMmKpxGficPz8AmAB2FsTeTsByhI"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase