import styled from "styled-components";

export const HomeContainer = styled.main``;
export const CoffeeList = styled.div`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font: ${(props) => props.theme.fonts.titleL};
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`;
