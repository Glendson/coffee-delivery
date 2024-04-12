import { useContext } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Hero } from "./components/Hero";
import { CoffeeList, HomeContainer } from "./styles";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Home() {

  const { coffees } = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <Hero />

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </div>
      </CoffeeList>
    </HomeContainer>
  );
}
