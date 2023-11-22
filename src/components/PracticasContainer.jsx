import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";

const PracticasContainer = () => {
  const { practicas } = useContext(PracticasContext);

  return (
    <>
      <div>PracticasContainer</div>
      <TitulosTabla />
      <div>
        {practicas?.map((practica) => (
          <PracticasRow key={practica.id} {...practica} />
        ))}
      </div>
    </>
  );
};

export default PracticasContainer;
