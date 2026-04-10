import type { IRoute } from "@appTypes/IRoute";
import RegistrationPage from "@pages/RegistrationPage/RegistrationPage";

export const PUBLIC_ROUTES: IRoute[] = [
  { path: "*", element: RegistrationPage },
];

export const PRIVATE_ROUTES: IRoute[] = [];

export const ADMINS_ROUTES: IRoute[] = [];
