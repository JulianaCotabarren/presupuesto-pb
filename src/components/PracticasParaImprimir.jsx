import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import styled from "styled-components";
import PracticasRowParaImprimir from "./PracticasRowParaImprimir";

const StyledPracticas = styled.div`
  border-bottom: 0.5px solid grey;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
`;

const PracticasParaImprimir = () => {
  const { practicasSeleccionadas } = useContext(PracticasContext);

  return (
    <StyledPracticas>
      {practicasSeleccionadas?.map((practicaSeleccionada, index) => (
        <PracticasRowParaImprimir
          key={practicaSeleccionada.id}
          nro={index + 1}
          {...practicaSeleccionada}
        />
      ))}
    </StyledPracticas>
  );
};

export default PracticasParaImprimir;
