import { ReactNode, createContext, useEffect, useState } from "react";
import { CreateNewOrderFormData } from "../pages/Checkout";
import  coffeesData from "../utils/data.json"
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

interface Order extends CreateNewOrderFormData {
  id: string;
  items: CartItem[];
}

interface CoffeeContextType {
  cartItems: CartItem[];
  orders: Order[];
  coffees: Coffee[];
  addCartItems: (coffee: Coffee, quantity: number) => void;
  createOrder: (formData: CreateNewOrderFormData) => void;
  removeCartItems: (coffeeId: Coffee["id"]) => void;
  increaseItemQuantity: (coffeeId: string) => void;
  decreaseItemQuantity: (coffeeId: string) => void;
  getCoffeeById: (id: string) => Coffee | undefined;
  getTotalCartPrice: () => string;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await coffeesData;
        const coffees = response.coffees;
        setCoffees(coffees);
      } catch (error) {
        console.error("Erro ao carregar os dados dos cafés:", error);
      }
    };

    fetchCoffees();
  }, []);

  function addCartItems(coffee: Coffee, quantity: number) {
    const existingCartItem = cartItems.find(item => item.id === coffee.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === coffee.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      const newCoffeeItem: CartItem = {
        id: coffee.id,
        price: coffee.price,
        quantity: quantity,
        totalPrice: coffee.price * quantity,
      };

      setCartItems([...cartItems, newCoffeeItem]);
    }
  }

  function removeCartItems(coffeeId: string) {
    setCartItems((state) => state.filter((item) => item.id !== coffeeId));
  }

  function increaseItemQuantity(coffeeId: string) {
    const updatedCartItems = cartItems.map((item) => {
      if(item.id === coffeeId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        totalPrice: (item.quantity + 1) * item.price,
        }
      }
      return item
    }) 
    setCartItems(updatedCartItems);
  }

  function decreaseItemQuantity(coffeeId: string) {
    const updatedCartItems = cartItems.map((item) => {
      if(item.id === coffeeId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        totalPrice: (item.quantity - 1) * item.price,
        }
      }
      return item
    }) 
    setCartItems(updatedCartItems);
  }

  function createOrder(formData: CreateNewOrderFormData) {
    const order: Order = {
      id: Math.random().toString(),
      ...formData,
      items: cartItems,
    };
    setOrders((state) => [...state, order]);
    setCartItems([]);
  }

  function getCoffeeById(coffeeId: string) {
    return coffees.find((coffee) => coffee.id === coffeeId);
  }

  function getTotalCartPrice() {
    const total = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
  }

  return (
    <CoffeeContext.Provider
      value={{
        orders,
        coffees,
        cartItems,
        createOrder,
        addCartItems,
        getCoffeeById,
        removeCartItems,
        getTotalCartPrice,
        decreaseItemQuantity,
        increaseItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
