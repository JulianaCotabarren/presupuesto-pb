import { useContext, useState } from "react";
import styled from "styled-components";
import { PracticasContext } from "../context/PracticasProvider";
import { useNavigate } from "react-router-dom";

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

const StyledBuscar = styled.button`
  font-size: 0.9rem;
  background-color: #e6ad32;
  width: 7rem;
  height: 1.7rem;
  padding: 0;
`;

const StyledResult = styled.label`
  font-size: 1rem;
  color: green;
  text-transform: uppercase;
  width: 30rem;
`;

const StyledAgregar = styled.button`
  font-size: 0.9rem;
  background-color: #74cc74;
  width: 7rem;
  height: 1.7rem;
  padding: 0;
`;

const AgregarContainer = () => {
  const { practicas, agregarPracticaSeleccionada } =
    useContext(PracticasContext);
  const [codigoBuscado, setCodigoBuscado] = useState("");
  const [resultado, setResultado] = useState("");
  const navigate = useNavigate();

  const redirectToBuscar = () => {
    navigate("/buscar");
  };

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
    const practicaEncontrada = practicas.find(
      (practica) => practica.id.toString() === codigoBuscado
    );

    if (practicaEncontrada) {
      agregarPracticaSeleccionada(practicaEncontrada);
    }
  };

  return (
    <StyledContainer>
      <StyledEstudio>Estudio:</StyledEstudio>
      <StyledInput
        placeholder="Codigo"
        value={codigoBuscado}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <StyledBuscar onClick={redirectToBuscar}>Buscar Estudio</StyledBuscar>
      <StyledResult>{resultado}</StyledResult>
      <StyledAgregar onClick={agregarPractica}>Agregar</StyledAgregar>
    </StyledContainer>
  );
};

export default AgregarContainer;
