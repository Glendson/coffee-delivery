import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
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

export const PaymentButton = styled.button`
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
`;

export const OrderSelectContainer = styled.div``;
