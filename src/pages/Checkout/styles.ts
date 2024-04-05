import styled from "styled-components";

export const CheckoutContainer = styled.div``;

export const OrderCompleteContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.75rem;
  padding: 0;
  border-radius: 0.375rem;
`;

export const AddressContainer = styled.div`
  flex: 1;
  gap: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const AddressHeader = styled.div``;

export const AddressFormContainer = styled.div``;

const BaseAddressInput = styled.input`
  height: 2.625rem;
  padding: 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  font: ${(props) => props.theme.fonts.textS};
  color: ${(props) => props.theme.colors["base-label"]};
  background: ${(props) => props.theme.colors["base-input"]};
`;

export const AddressCepInput = styled(BaseAddressInput)`
  width: 12.5rem;
`;

export const AddressInput = styled(BaseAddressInput)`
  flex: 1;
`;

export const AddressLineGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentContainer = styled.div`
  flex: 1;
  border-radius: 0.375rem;
  display: flex;
  gap: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const PaymentMethods = styled.div``;

export const PaymentButton = styled.button`
  display: flex;
  gap: 0.75rem;
  border-radius: 0.375rem;
  padding: 1rem;

  font: ${(props) => props.theme.fonts.buttonM};
  color: ${(props) => props.theme.colors["base-text"]};
  background: ${(props) => props.theme.colors["base-button"]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.purple};
  }
`;

export const OrderSelectContainer = styled.div``;
