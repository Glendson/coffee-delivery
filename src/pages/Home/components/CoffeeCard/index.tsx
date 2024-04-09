import { ShoppingCart } from "@phosphor-icons/react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import {
  CardContainer,
  CoffeeButton,
  CoffeeBuy,
  CoffeeDescription,
  CoffeeImage,
  CoffeePrice,
  CoffeeTag,
  CoffeeTitle,
} from "./styles";
import { useState } from "react";

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

interface CardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function handleIncreaseCoffeeAmount() {
    setCoffeeQuantity((state) => state + 1);
  }
  function handleDecreaseCoffeeAmount() {
    if (coffeeQuantity === 1) return;
    setCoffeeQuantity((state) => state - 1);
  }

  function handleAddCoffeeAmount() {
    const newCoffeeItem: CartItem = {
      id: coffee.id,
      price: coffee.price,
      quantity: coffeeQuantity,
      totalPrice: coffeeQuantity * coffee.price,
    };

    const existingCartItemsJSON = localStorage.getItem("cartItems");
    const existingCartItems: CartItem[] = existingCartItemsJSON
      ? JSON.parse(existingCartItemsJSON)
      : [];

    const existingCoffeeIndex = existingCartItems.findIndex(
      (item) => item.id === coffee.id
    );

    existingCoffeeIndex !== -1
      ? ((existingCartItems[existingCoffeeIndex].quantity += coffeeQuantity),
        (existingCartItems[existingCoffeeIndex].totalPrice +=
          coffeeQuantity * coffee.price))
      : existingCartItems.push(newCoffeeItem);

    setIsItemAdded(true);
    setCoffeeQuantity(1);
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt="" />

      <CoffeeTag>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </CoffeeTag>

      <CoffeeTitle>{coffee.title}</CoffeeTitle>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeeBuy>
        <CoffeePrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CoffeePrice>
        <QuantitySelector
          quantity={coffeeQuantity}
          inclementQuantity={handleIncreaseCoffeeAmount}
          declementQuantity={handleDecreaseCoffeeAmount}
        />
        <CoffeeButton onClick={handleAddCoffeeAmount}>
          <ShoppingCart weight="fill" />
        </CoffeeButton>
      </CoffeeBuy>
    </CardContainer>
  );
}
