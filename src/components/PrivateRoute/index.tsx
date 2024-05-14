import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { clearStorage, getStorage } from "../../utils/storage";
import { IUserMe } from "../../types/user.types";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const [userAuth, setUserAuth] = useState<IUserMe>();
  const push = useNavigate();

  const userAuthenticated = getStorage("@access_token");

  const server = async () => {
    const { data } = await supabase.auth.getUser();

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", data?.user?.id);

    return { profileData: profileData?.[0] };
  };

  const notAuthorized = userAuth?.role !== "admin" || !userAuthenticated;

  useEffect(() => {
    (async () => {
      const { profileData } = await server();

      if (profileData?.role !== "admin") {
        clearStorage();
        push("/");
        return;
      }

      setUserAuth(profileData as IUserMe);
    })();
  }, []);

  return (
    <>
      {notAuthorized && null}
      {userAuthenticated && children}
    </>
  );
};
