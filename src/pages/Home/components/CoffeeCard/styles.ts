import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0 20px 20px;
  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors["base-card"]};
`;

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -20px;
  align-self: center;
`;

export const CoffeeTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;

    text-transform: uppercase;

    font: ${(props) => props.theme.fonts.tag};
    background: ${(props) => props.theme.colors["yellow-light"]};
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }
`;

export const CoffeeTitle = styled.h3`
  margin-top: 15px;

  color: ${(props) => props.theme.colors["base-subtitle"]};
  font: ${(props) => props.theme.fonts.titleS};
`;

export const CoffeeDescription = styled.span`
  width: 100%;

  margin-top: 10px;

  color: ${(props) => props.theme.colors["base-label"]};
  font: ${(props) => props.theme.fonts.textS};
`;

export const CoffeeBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    font: ${(props) => props.theme.fonts.textS};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  span:last-child {
    font: ${(props) => props.theme.fonts.titleM};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const CoffeeButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 0.375rem;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 0;

  background: ${(props) => props.theme.colors["purple-dark"]};
  color: ${(props) => props.theme.colors["base-card"]};

  &:hover {
    background: ${(props) => props.theme.colors["purple"]};
  }

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;
