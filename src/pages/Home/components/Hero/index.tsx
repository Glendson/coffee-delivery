import { HeroContainer, HeroContent, HeroFeatures } from "./styles";
import heroBg from "../../../../../public/assets/hero-bg.svg";
import hero from "../../../../../public/assets/hero.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function Hero() {
  const theme = useTheme();

  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </header>

          <HeroFeatures>
            <div>
              <ShoppingCart
                weight="fill"
                style={{ background: theme.colors["yellow-dark"] }}
              />
              <span>Compra simples e segura.</span>
            </div>

            <div>
              <Package
                weight="fill"
                style={{ background: theme.colors["base-text"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                weight="fill"
                style={{ background: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                weight="fill"
                style={{ background: theme.colors.purple }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </HeroFeatures>
        </div>
        <img src={hero} id="hero" alt="" />
      </HeroContent>
      <img src={heroBg} id="hero-bg" alt="" />
    </HeroContainer>
  );
}
