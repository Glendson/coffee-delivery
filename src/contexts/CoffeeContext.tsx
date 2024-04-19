import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CreateNewOrderFormData } from "../pages/Checkout";
import coffeesData from "../utils/data.json";
import { useNavigate } from "react-router-dom";
import { CartItem, Coffee, Order, cartReducer } from "../reducers/Cart/reducer";
import {
  addCartItemsAction,
  createOrderAction,
  decreaseItemQuantityAction,
  increaseItemQuantityAction,
  removeCartItemAction,
} from "../reducers/Cart/actions";

interface CoffeeContextType {
  cart: CartItem[];
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
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
    coffees: [],
  });

  const { cart, orders, coffees } = cartState;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await coffeesData;
        const coffees = response.coffees;
        dispatch({ type: "SET_COFFEES", payload: coffees });
      } catch (error) {
        console.error("Erro ao carregar os dados dos cafés:", error);
      }
    };

    fetchCoffees();
  }, []);

  function addCartItems(coffee: Coffee, quantity: number) {
    dispatch(addCartItemsAction(coffee, quantity));
  }

  function removeCartItems(coffeeId: string) {
    dispatch(removeCartItemAction(coffeeId));
  }

  function increaseItemQuantity(coffeeId: string) {
    dispatch(increaseItemQuantityAction(coffeeId));
  }

  function decreaseItemQuantity(coffeeId: string) {
    dispatch(decreaseItemQuantityAction(coffeeId));
  }

  function createOrder(formData: CreateNewOrderFormData) {
    const order: Order = {
      id: Math.random().toString(),
      ...formData,
      items: cart,
    };

    dispatch(createOrderAction(order));

    navigate(`/success/${order.id}`);
  }

  function getCoffeeById(coffeeId: string): Coffee | undefined {
    return coffees.find((coffee: Coffee) => coffee.id === coffeeId);
  }

  function getTotalCartPrice() {
    const total = cart.reduce((total, item) => total + item.totalPrice, 0);
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        orders,
        coffees,
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
