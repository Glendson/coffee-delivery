import { useContext } from "react";
import { QuantitySelector } from "../../../components/QuantitySelector";
import {
  CoffeeActions,
  CoffeeContent,
  CoffeeImage,
  CoffeeInfo,
  CoffeePrice,
  CoffeeRemoveButton,
  CoffeeTitle,
  Container,
} from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Coffee, CoffeeContext } from "../../../contexts/CoffeeContext";

interface CardProps {
  coffee?: Coffee;
}

export function CoffeeCardItem({ coffee }: CardProps) {
  const { increaseItemQuantity, decreaseItemQuantity, coffeeQuantity } =
    useContext(CoffeeContext);

  function handleIncreaseQuantity() {
    increaseItemQuantity();
  }
  function handleDecreaseQuantity() {
    decreaseItemQuantity();
  }

  return (
    <Container>
      <CoffeeInfo>
        <CoffeeImage src="public/assets/coffees/americano.png" alt="" />

        <CoffeeContent>
          <CoffeeTitle>Cafe Americano</CoffeeTitle>

          <CoffeeActions>
            <QuantitySelector
              quantity={coffeeQuantity}
              declementQuantity={handleDecreaseQuantity}
              inclementQuantity={handleIncreaseQuantity}
            />

            <CoffeeRemoveButton>
              <Trash />
              <span>Remover</span>
            </CoffeeRemoveButton>
          </CoffeeActions>
        </CoffeeContent>
      </CoffeeInfo>

      <CoffeePrice>R$ 9.90</CoffeePrice>
    </Container>
  );
}
