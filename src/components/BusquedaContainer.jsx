import { useContext, useState } from "react";
import styled from "styled-components";
import { PracticasContext } from "../context/PracticasProvider";

const StyledContainer = styled.div`
  background-color: #ececec;
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledEstudio = styled.label`
  font-size: 1rem;
  width: 5rem;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 4rem;
  margin-right: 1rem;
`;

const StyledResult = styled.label`
  font-size: 1rem;
  color: green;
  text-transform: uppercase;
  width: 22rem;
  margin-right: 2rem;
`;

const StyledBuscar = styled.button`
  font-size: 0.9rem;
  background-color: #ffc65d;
  width: 6rem;
  height: 1.5;
  padding: 0;
`;

const StyledAgregar = styled.button`
  font-size: 0.9rem;
  background-color: #74cc74;
  width: 8rem;
  height: 1.5;
  padding: 0;
`;

const BusquedaContainer = () => {
  const { practicas } = useContext(PracticasContext);
  const [codigoBuscado, setCodigoBuscado] = useState("");
  const [resultado, setResultado] = useState("");

  const buscarPractica = () => {
    const practicaEncontrada = practicas.find(
      (practica) => practica.id.toString() === codigoBuscado
    );

    if (practicaEncontrada) {
      setResultado(practicaEncontrada.nombre);
    } else {
      setResultado("Práctica no encontrada");
    }
  };

  const handleInputChange = (e) => {
    setCodigoBuscado(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buscarPractica();
    }
  };

  const agregarPractica = () => {
    console.log(`Agregar Práctica: ${resultado}`);
  };

  return (
    <StyledContainer>
      <StyledEstudio>Estudio:</StyledEstudio>
      <StyledInput
        value={codigoBuscado}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <StyledBuscar onClick={buscarPractica}>Buscar</StyledBuscar>
      <StyledResult>{resultado}</StyledResult>
      <StyledAgregar onClick={agregarPractica}>Agregar</StyledAgregar>
    </StyledContainer>
  );
};

export default BusquedaContainer;
