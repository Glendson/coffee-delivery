import { styled } from "styled-components";

export const QuantityContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme.colors["base-button"]};

  button {
    width: 0.875rem;
    height: 0.875rem;
    display: flex;
    align-items: center;
    border: 0;
    color: ${(props) => props.theme.colors["purple"]};
    background: ${(props) => props.theme.colors["base-button"]};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors["purple-dark"]};
    }
  }
  
  span {
    font: ${(props) => props.theme.fonts.textM };
    color: ${(props) => props.theme.colors["base-title"]};
  }
`;
