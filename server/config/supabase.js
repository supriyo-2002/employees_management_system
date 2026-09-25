// Load environment variables
require("dotenv").config();

// Import Supabase
const { createClient } = require("@supabase/supabase-js");

// Create Supabase client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

// Export Supabase client
module.exports = supabase;