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

const StyledFecha = styled.label`
  font-size: 1rem;
  width: 5rem;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 5rem;
  margin-right: 1rem;
  border: none;
  text-align: center;
`;

const StyledValor = styled.label`
  font-size: 1rem;
  width: 5rem;
  margin-left: 28rem;
  margin-right: 0.5rem;
`;

const ValorUbContainer = () => {
  const { valorUb, handleValorUbChange } = useContext(PracticasContext);

  const obtenerFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };
  const [fecha, setFecha] = useState(obtenerFechaActual);

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledFecha>Fecha:</StyledFecha>
      <StyledInput type="text" value={fecha} onChange={handleFechaChange} />
      <StyledValor>Valor UB:</StyledValor>
      <StyledInput type="text" value={valorUb} onChange={handleValorUbChange} />
    </StyledContainer>
  );
};

export default ValorUbContainer;
