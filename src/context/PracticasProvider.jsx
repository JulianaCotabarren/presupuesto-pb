import { createContext } from "react";
import usePracticas from "../hooks/usePracticas";

export const PracticasContext = createContext("");

const PracticasProvider = ({ children }) => {
  const { practicas, getPracticas } = usePracticas();

  return (
    <PracticasContext.Provider value={{ practicas, getPracticas }}>
      {children}
    </PracticasContext.Provider>
  );
};

export default PracticasProvider;
