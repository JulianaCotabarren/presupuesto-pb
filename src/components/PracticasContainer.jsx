import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const StyledPracticas = styled.div`
  height: 60vh;
  overflow-y: scroll;
`;

const PracticasContainer = ({ searchText }) => {
  const { practicas } = useContext(PracticasContext);

  let practicasFiltradasPorTitulo = [];

  if (searchText) {
    const title = searchText.toLowerCase().trim();
    practicasFiltradasPorTitulo = practicas.filter((practica) =>
      practica.nombre.toLowerCase().includes(title)
    );
  }

  return (
    <StyledContainer>
      <TitulosTabla mostrarTodos={false} />
      <StyledPracticas>
        {practicasFiltradasPorTitulo.length === 0
          ? practicas?.map((practica) => (
              <PracticasRow
                key={practica.id}
                {...practica}
                mostrarTodos={false}
              />
            ))
          : practicasFiltradasPorTitulo.map((practica) => (
              <PracticasRow
                key={practica.id}
                {...practica}
                mostrarTodos={false}
              />
            ))}
      </StyledPracticas>
    </StyledContainer>
  );
};

export default PracticasContainer;
