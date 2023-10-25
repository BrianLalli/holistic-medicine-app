import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzxysjxxgacqhwnhqgos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eHlzanh4Z2FjcWh3bmhxZ29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMzczMTUsImV4cCI6MjAxMzgxMzMxNX0.mbjlOCDBQzPLz3Vi6r70Hb0UansBZNJgHLfDSu6g2GQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
