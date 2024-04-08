import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const CoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const CoffeeTitle = styled.span`
  font: ${(props) => props.theme.fonts.textM};
  color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const CoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CoffeeRemoveButton = styled.button`
  display: flex;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  gap: 0.25rem;
  padding: 0.5rem;

  background: ${(props) => props.theme.colors["base-button"]};

  > span {
    text-transform: uppercase;
    align-items: center;
    font: ${(props) => props.theme.fonts.buttonM};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.purple};
  }
`;

export const CoffeePrice = styled.aside`
  display: flex;
  text-align:;

  font: ${(props) => props.theme.fonts.titleXS};
  color: ${(props) => props.theme.colors["base-text"]};
`;

