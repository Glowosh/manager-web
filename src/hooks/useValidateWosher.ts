import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { NewOrderContextProps } from "./useValidationById";

type Props = {
  status?: string;
};

export const useValidateWosher = (props?: Props) => {
  const [profiles, setProfiles] = useState<NewOrderContextProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: profilesData, error: profilesError } = props?.status
        ? await supabase
            .from("validation_user")
            .select("*")
            .eq("status", props?.status)
        : await supabase
            .from("validation_user")
            .select("*")
            .eq("status", "pending");

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

  return { profiles, isLoading, error, fetchProfiles };
};
