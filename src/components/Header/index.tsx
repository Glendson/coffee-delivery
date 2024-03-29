import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import Logo from "../../../public/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <aside>
        <div>
          <MapPin width={22} weight="fill" />
          <span>Paranavaí, PR</span>
        </div>

        <NavLink to="/checkout">
          <ShoppingCart weight="fill" />
        </NavLink>
      </aside>
    </HeaderContainer>
  );
}
