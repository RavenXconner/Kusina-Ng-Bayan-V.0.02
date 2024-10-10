import { createClient } from '@supabase/supabase-js';

// Get the URL and Key from the environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Check if variables are defined
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is not defined. Please check your .env file.');
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
