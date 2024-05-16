import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { IProfile } from "./useWoshersData";

export const useUsersData = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "user");

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
