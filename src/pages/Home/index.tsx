import { CoffeeCard } from "./components/CoffeeCard";
import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <div>
                <Hero />

                <div>
                    <h2>Nossos cafés</h2>


                    <CoffeeCard />
                </div>
            </div>
        </HomeContainer>
    )
}