import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const PracticasSeleccionadasContainer = () => {
  const { practicasSeleccionadas } = useContext(PracticasContext);

  return (
    <StyledContainer>
      <TitulosTabla />
      <div>
        {practicasSeleccionadas?.map((practicaSeleccionada) => (
          <PracticasRow
            key={practicaSeleccionada.id}
            {...practicaSeleccionada}
          />
        ))}
      </div>
    </StyledContainer>
  );
};

export default PracticasSeleccionadasContainer;
