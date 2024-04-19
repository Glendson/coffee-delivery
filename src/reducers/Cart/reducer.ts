import { CreateNewOrderFormData } from "../../pages/Checkout";
import { ActionTypes } from "./actions";

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

export interface Order extends CreateNewOrderFormData {
  id: string;
  items: CartItem[];
}

interface CartState {
  cart: CartItem[];
  orders: Order[];
  coffees: Coffee[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_COFFEES:
      return {
        ...state,
        coffees: action.payload,
      };

    case ActionTypes.ADD_CART_ITEM:
      const { coffee, quantity } = action.payload;
      const existingCartItem = state.cart.find((item) => item.id === coffee.id);
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === coffee.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  totalPrice: (item.quantity + quantity) * item.price,
                }
              : item
          ),
        };
      } else {
        const newCoffeeItem: CartItem = {
          id: coffee.id,
          price: coffee.price,
          quantity: quantity,
          totalPrice: coffee.price * quantity,
        };
        return {
          ...state,
          cart: [...state.cart, newCoffeeItem],
        };
      }

    case ActionTypes.CREATE_NEW_ORDER:
      return {
        ...state,
        cart: [],
        orders: [...state.orders, action.payload.order],
      };

    case ActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };

    case ActionTypes.INCREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
            : item
        ),
      };

    case ActionTypes.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * (item.quantity - 1),
              }
            : item
        ),
      };

    default:
      return state;
  }
}
