import type { IUser } from "@appTypes/IUser";
import { create } from "zustand";

interface IUseUserStoreActions {}

interface IUseUserStore {
  user: IUser | null;
  userContacts: number[] | null;
  userEnemiesId: number[] | null;

  actions: IUseUserStoreActions;
}

export const useUserStore = create<IUseUserStore>((set) => ({
  user: null,
  userContacts: null,
  userEnemiesId: null,

  actions: {},
}));
