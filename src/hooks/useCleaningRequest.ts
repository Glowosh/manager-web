import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export interface ICleaningRequest {
  id: string;
  created_at: string;
  client_request_id: string;
  customer_car_id: string;
  wash_type_id: string;
  wash_size_id: string;
  wash_extras_id: string[];
  coverage_area_id: null;
  washer_id: string;
  wash_status: string;
  total_cost: number;
  images_before_cleaning?: null | string;
  images_after_cleaning?: null | string;
  service_date: string;
  schedule_hour: string;
  stripe_order_id?: null | string;
  day_of_week: string;
  model_car: string;
  license_number: string;
  address: string;
  phone_washer: string;
  name_washer: string;
}

export const useCleaningRequest = () => {
  const [cleaningRequests, setAllCleaningRequest] = useState<
    ICleaningRequest[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data, error: err } = await supabase
        .from("cleaning_requests")
        .select("*");

      if (err) {
        throw err;
      }

      setAllCleaningRequest(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { cleaningRequests, isLoading, error };
};
