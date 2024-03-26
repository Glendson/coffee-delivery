import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font: ${(props) => props.theme.fonts.titleXL};
      color: ${(props) => props.theme.colors["base-title"]};
    }
    span {
      font: ${(props) => props.theme.fonts.textL};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`;

export const HeroFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      width: 32px;
      height: 32px;
      padding: 8px;
      border-radius: 50%;
      color: ${(props) => props.theme.colors.background};
    }
  }
`;
