import { ReactNode, createContext } from "react";

interface CoffeeContextType {}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const coffee = "Cappuccino";

  return (
    <CoffeeContext.Provider value={{ coffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}
