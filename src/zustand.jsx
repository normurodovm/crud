import create from 'zustand';

const useStore = create((set) => ({
  items: [],

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),

  getItems: () => set((state) => state.items),

  updateItem: (id, updatedItem) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    ),
  })),

  deleteItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
}));

export default useStore;
