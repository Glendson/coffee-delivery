import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./styles";

interface QuantitySelectorProps {
  quantity: number;
  inclementQuantity: () => void;
  declementQuantity: () => void;
}

export function QuantitySelector({
  quantity,
  inclementQuantity,
  declementQuantity,
}: QuantitySelectorProps) {
  return (
    <QuantityContainer>
      <button onClick={inclementQuantity}>
        <Plus />
      </button>
      <span>{quantity}</span>
      <button onClick={declementQuantity}>
        <Minus />
      </button>
    </QuantityContainer>
  );
}
