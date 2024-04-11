import { NavLink } from "react-router-dom";
import { CartCounter, HeaderContainer } from "./styles";
import Logo from "../../../public/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
  const { cartItems } = useContext(CoffeeContext);

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

        <NavLink to="/checkout" aria-disabled={!cartItems.length}>
          <ShoppingCart weight="fill" />
          {cartItems.length > 0 ? (
            <CartCounter>{cartItems.length}</CartCounter>
          ) : null}
        </NavLink>
      </aside>
    </HeaderContainer>
  );
}
