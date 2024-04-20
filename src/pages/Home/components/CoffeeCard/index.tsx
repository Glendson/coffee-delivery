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
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Coffee } from "../../../../reducers/Cart/reducer";

interface CardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CardProps) {
  const { addCartItems } = useContext(CoffeeContext);

  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  function handleIncreaseCoffeeAmount() {
    setCoffeeQuantity((state) => state + 1);
  }
  function handleDecreaseCoffeeAmount() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((state) => state - 1);
    }
  }

  function handleAddCart() {
    addCartItems(coffee, coffeeQuantity);
    setCoffeeQuantity(1);
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt="" />

      <CoffeeTag>
        {coffee.tags.map((tag: string) => {
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
        <div>
          <QuantitySelector
            quantity={coffeeQuantity}
            inclementQuantity={handleIncreaseCoffeeAmount}
            declementQuantity={handleDecreaseCoffeeAmount}
          />
          <CoffeeButton onClick={handleAddCart}>
            <ShoppingCart weight="fill" />
          </CoffeeButton>
        </div>
      </CoffeeBuy>
    </CardContainer>
  );
}
