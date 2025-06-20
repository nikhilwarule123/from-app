import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqnzdibeuzylipftqufh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbnpkaWJldXp5bGlwZnRxdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzOTc0MzgsImV4cCI6MjA2NTk3MzQzOH0.7N85vYjfE5jabfpunD1EVByRZQfC2tsp3ktPM1BV5_w';

export const supabase = createClient(supabaseUrl, supabaseKey);
