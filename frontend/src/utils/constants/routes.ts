import type { IRoute } from "@appTypes/IRoute";
import ChatPage from "@pages/ChatPage/ChatPage";
import RegistrationPage from "@pages/RegistrationPage/RegistrationPage";

export const PUBLIC_ROUTES: IRoute[] = [
  { path: "*", element: RegistrationPage },
];

export const PRIVATE_ROUTES: IRoute[] = [{ path: "*", element: ChatPage }];

export const ADMINS_ROUTES: IRoute[] = [];
