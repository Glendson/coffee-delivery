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
import {  CoffeeContext } from "../../../contexts/CoffeeContext";

interface CardProps {
  coffeeId: string;
}

export function CoffeeCardItem({ coffeeId }: CardProps) {
  const { increaseItemQuantity, decreaseItemQuantity, removeCartItems, cartItems, getCoffeeById } =
    useContext(CoffeeContext);

    const coffee = getCoffeeById(coffeeId)

    if (!coffee) {
      return null; 
    }

    const coffeeInCart = cartItems.find((item) => item.id === coffee.id);

    const coffeeQuantity = coffeeInCart ? coffeeInCart.quantity : 1;

  function handleIncreaseQuantity() {
    increaseItemQuantity(coffeeId);
  }
  function handleDecreaseQuantity() {
    if(!coffeeInCart ) return;
    decreaseItemQuantity(coffeeId);
  }

  function handleRemoveItemCart(){
    removeCartItems(coffeeId);
  }

  return (
    <Container>
      <CoffeeInfo>
        <CoffeeImage src={coffee.image} alt="" />

        <CoffeeContent>
          <CoffeeTitle>{coffee.title}</CoffeeTitle>

          <CoffeeActions>
            <QuantitySelector
              quantity={coffeeQuantity}
              declementQuantity={handleDecreaseQuantity}
              inclementQuantity={handleIncreaseQuantity}
            />

            <CoffeeRemoveButton onClick={handleRemoveItemCart}>
              <Trash />
              <span>Remover</span>
            </CoffeeRemoveButton>
          </CoffeeActions>
        </CoffeeContent>
      </CoffeeInfo>

      <CoffeePrice>R$ {coffee.price.toFixed(2)}</CoffeePrice>
    </Container>
  );
}
