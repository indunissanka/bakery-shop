import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SupabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
  const [supabaseClient, setSupabaseClient] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!url || !key) {
      console.error("Supabase URL or Anon Key not set in environment variables!");
      return;
    }

    const client = createClient(url, key);
    setSupabaseClient(client);
  }, []);

  return (
    <SupabaseContext.Provider value={supabaseClient}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabaseClient = () => {
  return useContext(SupabaseContext);
};
