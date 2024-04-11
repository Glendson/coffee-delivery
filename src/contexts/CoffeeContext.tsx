import { ReactNode, createContext, useState } from "react";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CoffeeContextType {
  hasItemsInCart: number;
  coffeeQuantity: number;
  addCartItems: (coffee: Coffee) => void;
  removeCartItems: (coffeeId: Coffee['id']) => void;
  increaseItemQuantity: () => void;
  decreaseItemQuantity: () => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  const hasItemsInCart = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);


  function addCartItems(coffee: Coffee) {
    const newCoffeeItem: CartItem = {
      id: coffee.id,
      price: coffee.price,
      quantity: coffeeQuantity,
      totalPrice: coffeeQuantity * coffee.price,
    };

    setCartItems((state) => [...state, newCoffeeItem]);
    setCoffeeQuantity(1);
  }

  function removeCartItems(coffeeId: string) {
    setCartItems((state) => state.filter((item) => item.id !== coffeeId));
  }

  function increaseItemQuantity() {
    setCoffeeQuantity((state) => state + 1);
  }

  function decreaseItemQuantity() {
    if (coffeeQuantity === 1) return;
    setCoffeeQuantity((state) => state - 1);
  }

  return (
    <CoffeeContext.Provider
      value={{
        hasItemsInCart,
        coffeeQuantity,
        addCartItems,
        removeCartItems,
        decreaseItemQuantity,
        increaseItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
