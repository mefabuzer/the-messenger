import { create } from "zustand";

type TSectionType = "registration" | "auth" | "restore";

interface IUseRegistrationSectionStore {
  sectionType: TSectionType;
  setRegistrationType: () => void;
  setAuthType: () => void;
  setRestoreType: () => void;
}

export const useRegistrationSectionStore = create<IUseRegistrationSectionStore>(
  (set) => ({
    sectionType: "registration",

    setRegistrationType: () => set({ sectionType: "registration" }),
    setAuthType: () => set({ sectionType: "auth" }),
    setRestoreType: () => set({ sectionType: "restore" }),
  }),
);
