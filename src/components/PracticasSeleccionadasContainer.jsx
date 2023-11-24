import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";
import SubtotalContainer from "./SubtotalContainer";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const StyledPracticas = styled.div`
  height: 40vh;
`;

const PracticasSeleccionadasContainer = () => {
  const { practicasSeleccionadas, eliminarPracticaSeleccionada } =
    useContext(PracticasContext);

  return (
    <StyledContainer>
      <TitulosTabla />
      <StyledPracticas>
        {practicasSeleccionadas?.map((practicaSeleccionada) => (
          <PracticasRow
            key={practicaSeleccionada.id}
            {...practicaSeleccionada}
            onDelete={eliminarPracticaSeleccionada}
          />
        ))}
      </StyledPracticas>
      <SubtotalContainer />
    </StyledContainer>
  );
};

export default PracticasSeleccionadasContainer;
