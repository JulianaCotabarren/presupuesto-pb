import { createContext } from "react";
import usePracticas from "../hooks/usePracticas";
import usePracticasSeleccionadas from "../hooks/usePracticasSeleccionadas";
import useValorUb from "../hooks/useValorUb";

export const PracticasContext = createContext("");

const PracticasProvider = ({ children }) => {
  const { practicas, getPracticas } = usePracticas();
  const {
    practicasSeleccionadas,
    getPracticasSeleccionadas,
    agregarPracticaSeleccionada,
  } = usePracticasSeleccionadas();
  const { valorUb, handleValorUbChange } = useValorUb();

  return (
    <PracticasContext.Provider
      value={{
        practicas,
        getPracticas,
        practicasSeleccionadas,
        getPracticasSeleccionadas,
        agregarPracticaSeleccionada,
        valorUb,
        handleValorUbChange,
      }}
    >
      {children}
    </PracticasContext.Provider>
  );
};

export default PracticasProvider;
