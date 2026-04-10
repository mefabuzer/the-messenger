import { create } from "zustand";

interface IUseAlertsStoreActions {
  addErrorAlert: (message: string) => void;
  addSuccessAlert: (message: string) => void;

  deleteAlert: (id: number) => void;
}

type TAlertType = "success" | "error";

export interface IAlert {
  id: number;
  type: TAlertType;
  message: string;
}

interface IUseAlertsStore {
  alerts: IAlert[];

  actions: IUseAlertsStoreActions;
}

export const useAlertsStore = create<IUseAlertsStore>((set) => ({
  alerts: [],

  actions: {
    addErrorAlert: (message: string) =>
      set((state) => {
        if (state.alerts.length < 4) {
          return {
            alerts: [
              ...state.alerts,
              { type: "error", id: Date.now(), message },
            ],
          };
        }

        return state;
      }),

    addSuccessAlert: (message: string) =>
      set((state) => {
        if (state.alerts.length < 4) {
          return {
            alerts: [
              ...state.alerts,
              { type: "success", id: Date.now(), message },
            ],
          };
        }

        return state;
      }),

    deleteAlert: (id: number) =>
      set((state) => ({
        alerts: [...state.alerts.filter((alert) => alert.id !== id)],
      })),
  },
}));
