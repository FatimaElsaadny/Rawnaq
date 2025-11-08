// src/js/supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ungfsymkglyeukzilqyd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZ2ZzeW1rZ2x5ZXVremlscXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNTM0ODgsImV4cCI6MjA3NzgyOTQ4OH0.bSKs_hUyapVy659HlTrCKp1DUu7RHdTTZi7_RdfRefM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);