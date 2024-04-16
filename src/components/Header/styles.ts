import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 90rem;
  padding: 32px 160px;

  aside {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      

      padding: 10px 8px;

      border-radius: 0.375rem;

      background: ${(props) => props.theme.colors["purple-light"]};

      svg {
        color: ${(props) => props.theme.colors["purple-dark"]};
      }

      span {
        text-size: ${(props) => props.theme.fonts.textS};
        color: ${(props) => props.theme.colors["purple-dark"]};
      }
    }

    a {
      display: flex;
      align-items: center;
      width: 2.375rem;
      height: 2.375rem;

      border-radius: 0.375rem;
      gap: 0.25rem;
      padding: 8px;
      position: relative;

      background: ${(props) => props.theme.colors["yellow-light"]};
      color: ${(props) => props.theme.colors["yellow-dark"]};

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const CartCounter = styled.span`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;

  position: absolute;

  font-weight: bold;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  top: -5px;
  right: -5px;

  font: ${(props) => props.theme.fonts.textS};
  background: ${(props) => props.theme.colors["yellow-dark"]};
  color: ${(props) => props.theme.colors.white};
`;
