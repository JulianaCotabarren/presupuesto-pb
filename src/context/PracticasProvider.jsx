import { createContext } from "react";
import usePracticas from "../hooks/usePracticas";
import usePracticasSeleccionadas from "../hooks/usePracticasSeleccionadas";
import useTotal from "../hooks/useTotal";

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
    nroPractica,
    setNroPractica,
  } = usePracticasSeleccionadas();
  const { total, handleTotalChange, setTotal } = useTotal();

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
        nroPractica,
        setNroPractica,
        total,
        handleTotalChange,
        setTotal,
      }}
    >
      {children}
    </PracticasContext.Provider>
  );
};

export default PracticasProvider;
