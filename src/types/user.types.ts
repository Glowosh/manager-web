/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserIdentity } from "@supabase/supabase-js";

export interface IUserCar {
  id?: string;
  car_model_id?: string;
  user_id?: string;
  color?: string;
  license_number?: string;
  imageSource?: string;
}

export type IUserCars = IUserCar[];

export type IUserCarDisplay = IUserCar & {
  car_model: string;
  image: string;
  wash_size_id: string;
  wash_size_price_multiplier?: number;
  wash_size: string;
};

export type IUserCarMutationParams = Omit<IUserCar, "id">;

export type IUserCarQueryParams = Pick<IUserCar, "car_model_id">;

export interface IUserMe {
  app_metadata?: { [key: string]: string };
  aud?: string;
  confirmed_at?: string;
  created_at?: string;
  email?: string;
  email_confirmed_at?: string;
  id?: string;
  identities?: UserIdentity[];
  last_sign_in_at?: string;
  phone?: string;
  role?: string;
  updated_at?: string;
  user_metadata?: { [key: string]: string };
  profile?: any;
  user_cars: IUserCarDisplay[];
  isCompleted: boolean;
}
