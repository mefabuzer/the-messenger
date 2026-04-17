import { useUserStore } from "@stores/useUserStore";
import {
  ADMINS_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from "./utils/constants/routes";
import RoutesList from "@components/RoutesList";
import { useGetUserData } from "@hooks/useGetUserData";
import { useEffect } from "react";
import Loader from "@components/Loader/Loader";

// cd C:\Program Files\Google\Chrome\Application
// chrome.exe --ignore-certificate-errors

function App() {
  const { user } = useUserStore((state) => state);

  const { fn, isLoading } = useGetUserData();

  useEffect(() => {
    (async () => await fn(true))();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <RoutesList routes={PUBLIC_ROUTES} />;
  }

  if (user && !user.is_admin) {
    return <RoutesList routes={PRIVATE_ROUTES} />;
  }

  if (user && user.is_admin) {
    return <RoutesList routes={ADMINS_ROUTES} />;
  }
}

export default App;
