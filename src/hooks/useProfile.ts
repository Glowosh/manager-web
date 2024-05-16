import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { IProfile } from "./useWoshersData";

type Props = {
  id: string | number;
};

export const useProfile = ({ id }: Props) => {
  const [profile, setProfile] = useState<IProfile>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (profilesError) {
        throw profilesError;
      }

      setProfile(profilesData as any);
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

  return { profile, isLoading, error };
};
