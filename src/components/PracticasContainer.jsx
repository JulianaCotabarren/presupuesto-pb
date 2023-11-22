import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const PracticasContainer = () => {
  const { practicas } = useContext(PracticasContext);

  return (
    <StyledContainer>
      <TitulosTabla />
      <div>
        {practicas?.map((practica) => (
          <PracticasRow key={practica.id} {...practica} />
        ))}
      </div>
    </StyledContainer>
  );
};

export default PracticasContainer;
