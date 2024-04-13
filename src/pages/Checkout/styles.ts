import styled, { css } from "styled-components";

interface PaymentButtonProps {
  selected: boolean;
}

export const CheckoutContainer = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;

  h2 {
    font: ${(props) => props.theme.fonts.titleXS};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

const container = styled.div`
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const OrderCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const AddressContainer = styled(container)``;

const BaseHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    font: ${(props) => props.theme.fonts.textM};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    font: ${(props) => props.theme.fonts.textS};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const AddressHeader = styled(BaseHeader)`
  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const BaseAddressInput = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  font: ${(props) => props.theme.fonts.textS};
  color: ${(props) => props.theme.colors["base-label"]};
  background: ${(props) => props.theme.colors["base-input"]};

  border: 1px solid transparent;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: ${(props) => props.theme.colors["yellow-dark"]}; /* Cor da borda quando focado */
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const AddressCepInput = styled(BaseAddressInput)`
  width: 12.5rem;
`;

export const AddressUFInput = styled(BaseAddressInput)`
  width: 3.75rem;
  text-transform: uppercase;
`;

export const AddressInput = styled(BaseAddressInput)`
  flex: 1;
`;

export const AddressLineGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentContainer = styled(container)`
  margin-top: 0.75rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme.colors.purple};
  }
`;

export const PaymentHeader = styled(BaseHeader)``;

export const PaymentMethods = styled.div`
  width: 100%;
  min-width: 640px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const PaymentButton = styled.button<PaymentButtonProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 0.75rem;
  border: 0;
  border-radius: 0.375rem;
  padding: 1rem;

  text-transform: uppercase;

  font: ${(props) => props.theme.fonts.buttonM};
  color: ${(props) => props.theme.colors["base-text"]};
  background: ${(props) => props.theme.colors["base-button"]};

  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.purple};
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid;

      border-color: ${(props) => props.theme.colors.purple};
      background: ${(props) => props.theme.colors["purple-light"]};
    `}

  &:hover {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    background: ${(props) => props.theme.colors["base-hover"]};
  }
`;

export const OrderCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  min-width: 448px;
  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const Divider = styled.div`
  display: block;

  width: 100%;
  height: 1px;
  margin-top: 24px;

  background: ${(props) => props.theme.colors["base-button"]};
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.75rem;
`;

export const TotalItens = styled(TotalContainer)`
  > span {
    font: ${(props) => props.theme.fonts.textS};
    color: ${(props) => props.theme.colors["base-text"]};
  }
  > p {
    font: ${(props) => props.theme.fonts.textM};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;
export const DeliveryPrice = styled(TotalContainer)`
  > span {
    font: ${(props) => props.theme.fonts.textS};
    color: ${(props) => props.theme.colors["base-text"]};
  }
  > p {
    font: ${(props) => props.theme.fonts.textM};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;
export const CartTotal = styled(TotalContainer)`
  > span {
    font: ${(props) => props.theme.fonts.textL};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
  > p {
    font: ${(props) => props.theme.fonts.textL};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const CheckOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;

  gap: 0.25rem;

  padding: 12px 8px;

  text-transform: uppercase;

  font: ${(props) => props.theme.fonts.buttonG};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellow};

  &:hover {
    background: ${(props) => props.theme.colors["yellow-dark"]};
  }

  transition: all 0.3s;
  cursor: pointer;
`;
