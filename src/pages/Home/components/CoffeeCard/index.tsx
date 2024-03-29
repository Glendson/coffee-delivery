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
    if (isItemAdded) return;
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
