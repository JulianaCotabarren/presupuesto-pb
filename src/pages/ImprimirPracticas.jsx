import styled from "styled-components";
import PracticasParaImprimir from "../components/PracticasParaImprimir";
import TotalContainer from "../components/TotalContainer";
import TitulosParaImprimir from "../components/TitulosParaImprimir";
import { useState } from "react";

const StyledTitles = styled.div`
  height: 12rem;
  margin-bottom: 5rem;
  margin-top: 0;
  padding-top: 0;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
`;

const H2 = styled.h2`
  font-size: 2.1rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const H3 = styled.h3`
  font-size: 1.9rem;
  margin-top: 0.5rem;
`;

const StyledDatos = styled.div`
  background-color: #ececec;
  height: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledPresupuesto = styled.div`
  width: 5rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-right: 26rem;
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

const ImprimirPracticas = () => {
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
    <>
      <StyledTitles>
        <H1>MG LABORATORIO</H1>
        <H2>ANÁLISIS CLÍNICOS Y BACTERIOLÓGICOS</H2>
        <H3>Bioquímica: Dra. Mayra Gusso</H3>
      </StyledTitles>
      <StyledDatos>
        <StyledPresupuesto>PRESUPUESTO</StyledPresupuesto>
        <StyledFecha>Fecha:</StyledFecha>
        <StyledInput type="text" value={fecha} onChange={handleFechaChange} />
      </StyledDatos>
      <TitulosParaImprimir />
      <PracticasParaImprimir />
      <TotalContainer mostrarImprimir={false} />
    </>
  );
};

export default ImprimirPracticas;
