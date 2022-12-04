import create from "zustand";

export const useStore = create((set) => ({
  counter: 10,
  increment: () =>
    set((state) => ({
      ...state,
      counter: state.counter + 1,
    })),
  decrease: () =>
    set((state) => ({
      ...state,
      counter: state.counter - 1,
    })),
}));

export const useHackNew = create((set) => ({
  hits: [],
  isLoading: true,

  fetch: async (req) => {
    try {
      set({ isLoading: true });
      const response = await fetch(req);
      const { hits } = await response.json();
      set({ hits, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },

  reset: () => set({ hits: [] }),
}));
