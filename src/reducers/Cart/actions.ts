import { Coffee, Order } from "./reducer";

export enum ActionTypes {
  ADD_CART_ITEM = "ADD_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  INCREASE_CART_ITEM_QUANTITY = "INCREASE_CART_ITEM_QUANTITY",
  DECREASE_CART_ITEM_QUANTITY = "DECREASE_CART_ITEM_QUANTITY",
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
  SET_COFFEES = "SET_COFFEES",
}

export function addCartItemsAction(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_CART_ITEM,
    payload: {
      coffee,
      quantity,
    },
  };
}

export function createOrderAction(order: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
}

export function removeCartItemAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      coffeeId,
    },
  };
}

export function increaseItemQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_CART_ITEM_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function decreaseItemQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_CART_ITEM_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}
