import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

/* The template's localStorage demo store: a cart shared by the navbar, the
   product pages and checkout, plus the last placed order. */

export type CartItem = { id: string; name: string; price: number; qty: number };
export type Order = { items: CartItem[]; total: number; placedAt: string };

const CART_KEY = "trenox:cart:v1";
const ORDER_KEY = "trenox:order:v1";

function read<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function formatMoney(n: number) {
  return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function parsePrice(text: string) {
  const n = parseFloat(text.replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  /** Adds to an existing line by id, and opens the cart dialog. */
  add: (item: CartItem) => void;
  remove: (index: number) => void;
  /** Saves the cart as the last order and empties the cart. */
  placeOrder: () => void;
  /** The last placed order (null until loaded in the browser). */
  order: Order | null;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<Order | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  // localStorage only exists in the browser, so load after hydration.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setItems(read<CartItem[]>(CART_KEY, []));
    setOrder(read<Order | null>(ORDER_KEY, null));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const update = useCallback((next: CartItem[]) => {
    write(CART_KEY, next);
    setItems(next);
  }, []);

  const add = useCallback(
    (item: CartItem) => {
      const next = read<CartItem[]>(CART_KEY, []);
      const found = next.find((it) => it.id === item.id);
      if (found) found.qty += item.qty;
      else next.push(item);
      update(next);
      setCartOpen(true);
    },
    [update],
  );

  const remove = useCallback(
    (index: number) => {
      const next = read<CartItem[]>(CART_KEY, []);
      next.splice(index, 1);
      update(next);
    },
    [update],
  );

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const placeOrder = useCallback(() => {
    const placed: Order = { items, total: subtotal, placedAt: new Date().toISOString() };
    write(ORDER_KEY, placed);
    setOrder(placed);
    update([]);
  }, [items, subtotal, update]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((sum, it) => sum + it.qty, 0),
      subtotal,
      add,
      remove,
      placeOrder,
      order,
      cartOpen,
      setCartOpen,
    }),
    [items, subtotal, add, remove, placeOrder, order, cartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
