import { supabase } from "../lib/supabase";
import { useCallback, useEffect, useState } from "react";

export interface NewOrderContextProps {
  face_image: string;
  doc_image: string;
  full_name: string;
  date_of_birth: string;
  coverage_area: string;
  wosher_id?: string;
  id?: string;
  status?: string;
}
type Props = {
  wosher_id: string;
};
export const useValidationById = ({ wosher_id }: Props) => {
  const [profiles, setProfiles] = useState<NewOrderContextProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: profilesData, error: profilesError } = await supabase
        .from("validation_user")
        .select("*")
        .eq("wosher_id", wosher_id)
        .eq("status", "pending")
        .single();

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
