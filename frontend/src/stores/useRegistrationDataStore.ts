import { create } from "zustand";

interface IUseRegistrationDataStore {
  email: string;
  password: string;
  nickname: string;

  setNewEmail: (email: string) => void;
  setNewPassword: (password: string) => void;
  setNewNickname: (nickname: string) => void;

  setDefault: () => void;
}

export const useRegistrationDataStore = create<IUseRegistrationDataStore>(
  (set) => ({
    email: "",
    nickname: "",
    password: "",

    setNewEmail: (email: string) => set((state) => ({ ...state, email })),
    setNewNickname: (nickname: string) =>
      set((state) => ({ ...state, nickname })),
    setNewPassword: (password: string) =>
      set((state) => ({ ...state, password })),

    setDefault: () =>
      set((state) => ({ email: "", nickname: "", password: "" })),
  }),
);
