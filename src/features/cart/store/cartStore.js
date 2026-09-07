import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Cart Store using Zustand with localStorage persistence
 * Supports bilingual (fa/en) and RTL
 */
export const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      items: [],
      isOpen: false,

      // Actions
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity }]
          };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          )
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      // Computed values
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = typeof item.price === 'number' ? item.price : 0;
          return total + (price * item.quantity);
        }, 0);
      },

      getSubtotal: () => {
        return get().getTotalPrice();
      },

      // Check if product is in cart
      isInCart: (productId) => {
        return get().items.some(item => item.id === productId);
      },

      // Get item quantity
      getItemQuantity: (productId) => {
        const item = get().items.find(item => item.id === productId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'cart-storage', // localStorage key
      partialize: (state) => ({ items: state.items }), // Only persist items, not UI state
      storage: createJSONStorage(() => {
        // Check if we're in a browser environment
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        // Return a noop storage for SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);
