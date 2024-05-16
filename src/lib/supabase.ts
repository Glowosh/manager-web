/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createClient } from "@supabase/supabase-js";

import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  //@ts-ignore
} from "../../supabase.config.js"; // {../../../../supabase.config.local.js}

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
