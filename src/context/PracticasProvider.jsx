import { createContext } from "react";
import usePracticas from "../hooks/usePracticas";
import usePracticasSeleccionadas from "../hooks/usePracticasSeleccionadas";

export const PracticasContext = createContext("");

const PracticasProvider = ({ children }) => {
  const { practicas, getPracticas } = usePracticas();
  const {
    practicasSeleccionadas,
    getPracticasSeleccionadas,
    agregarPracticaSeleccionada,
    eliminarPracticaSeleccionada,
    valorUb,
    handleValorUbChange,
  } = usePracticasSeleccionadas();

  return (
    <PracticasContext.Provider
      value={{
        practicas,
        getPracticas,
        practicasSeleccionadas,
        getPracticasSeleccionadas,
        agregarPracticaSeleccionada,
        eliminarPracticaSeleccionada,
        valorUb,
        handleValorUbChange,
      }}
    >
      {children}
    </PracticasContext.Provider>
  );
};

export default PracticasProvider;
