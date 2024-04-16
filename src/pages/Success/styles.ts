import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
`;

export const SuccessBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  margin-bottom: 2.5rem;

  h1 {
    font: ${(props) => props.theme.fonts.titleL};
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  span {
    font: ${(props) => props.theme.fonts.textL};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const SuccessContent = styled.div`
  width: 33rem;
  border-radius: 6px 36px;
  margin-right: 6.375rem;

  border: 1px solid transparent;
  background-origin: border-box;

  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.colors.yellow}, ${props.theme.colors.purple})`};
`;

export const SuccessOrderInfo = styled.div`
  width: 100%;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;
  padding: 2.5rem;
`;

const OrderDiv = styled.div`
  display: flex;
  gap: 0.75rem;

  align-items: center;
  padding: 8px;

  div {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;

  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
`;

export const IconTimer = styled(Icon)`
  background: ${(props) => props.theme.colors.yellow};
`;
export const IconCash = styled(Icon)`
  background: ${(props) => props.theme.colors["yellow-dark"]};
`;

export const OrderAddress = styled(OrderDiv)``;

export const TimeDelivery = styled(OrderDiv)``;

export const OrderPayment = styled(OrderDiv)``;

export const SuccessImage = styled.img``;
