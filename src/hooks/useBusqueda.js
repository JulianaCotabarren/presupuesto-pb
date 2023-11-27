import { useContext, useState } from "react";
import { PracticasContext } from "../context/PracticasProvider";

const useBusqueda = () => {
  const { practicas } = useContext(PracticasContext);
  const [busqueda, setBusqueda] = useState("");

  return {};
};

export default useBusqueda;
