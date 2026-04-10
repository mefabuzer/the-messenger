import { useUserStore } from "@stores/useUserStore";
import {
  ADMINS_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from "./utils/constants/routes";
import RoutesList from "@components/RoutesList";

function App() {
  const { user } = useUserStore((state) => state);

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
