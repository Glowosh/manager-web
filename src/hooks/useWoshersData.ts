import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export interface IProfile {
  id: string;
  user_id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: null | string;
  avatar_url: null | string;
  stripe_customer_id: null | string;
  status_register: null | string;
}

export const useWoshersData = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "wosher");

      if (profilesError) {
        throw profilesError;
      }

      setProfiles(profilesData as any);
    } catch (error) {
      //@ts-ignore
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  return { profiles, isLoading, error };
};
