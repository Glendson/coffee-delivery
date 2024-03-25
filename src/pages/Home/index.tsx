import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <div>
                <Hero />
            </div>
        </HomeContainer>
    )
}