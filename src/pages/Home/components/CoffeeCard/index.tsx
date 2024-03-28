import { ShoppingCart } from "@phosphor-icons/react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import { CardContainer, CoffeeBuy, CoffeeDescription, CoffeeImage, CoffeePrice, CoffeeTag, CoffeeTitle } from "./styles";

export function CoffeeCard(){
    return (
        <CardContainer>
            <CoffeeImage src="public/assets/coffees/americano.png" alt="" />

            <CoffeeTag>
                <span>Tradicional</span>
            </CoffeeTag>

            <CoffeeTitle>Americano</CoffeeTitle>

            <CoffeeDescription>O tradicional café feito com água quente e grãos moídos.</CoffeeDescription>

            <CoffeeBuy>
                <CoffeePrice>
                    <span>R$</span>
                    <span>15,00</span>
                </CoffeePrice>
                <QuantitySelector />
                <button><ShoppingCart /></button>
            </CoffeeBuy>
        </CardContainer>
    )
}