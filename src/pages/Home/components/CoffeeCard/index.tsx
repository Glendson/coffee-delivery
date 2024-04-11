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
import { useContext } from "react";
import { Coffee, CoffeeContext } from "../../../../contexts/CoffeeContext";

interface CardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CardProps) {
  const {
    addCartItems,
    coffeeQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(CoffeeContext);

  function handleIncreaseCoffeeAmount() {
    increaseItemQuantity();
  }
  function handleDecreaseCoffeeAmount() {
    decreaseItemQuantity();
  }

  function handleAddCart() {
    addCartItems(coffee);
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
        <CoffeeButton onClick={handleAddCart}>
          <ShoppingCart weight="fill" />
        </CoffeeButton>
      </CoffeeBuy>
    </CardContainer>
  );
}
