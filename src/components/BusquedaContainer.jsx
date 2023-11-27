import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import useBusqueda from "../hooks/useBusqueda";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
  background-color: #ececec;
  height: 3rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 15rem;
`;

const StyledButton = styled.button`
  width: 2rem;
  height: 1.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledListado = styled.button`
  font-size: 0.9rem;
  background-color: #fcf15a;
  width: 10rem;
  height: 1.6rem;
  padding: 0;
`;

const BusquedaContainer = () => {
  const { busqueda, handleChangeBusqueda, handleBuscar } = useBusqueda();
  const navigate = useNavigate();

  const redirectToMain = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <StyledButton onClick={redirectToMain}>
        <IoMdArrowRoundBack />
      </StyledButton>
      <StyledInput
        type="text"
        placeholder="Nombre Práctica"
        value={busqueda}
        onChange={handleChangeBusqueda}
      ></StyledInput>
      <StyledButton onClick={handleBuscar}>
        <MdOutlineSearch />
      </StyledButton>
      <StyledListado>Listado de Prácticas</StyledListado>
    </StyledContainer>
  );
};

export default BusquedaContainer;

//Dado el siguiente código ... Escribe el código necesario para que, al ingresar un texto en el StyledInput de BusquedaContainer, se realice la búsqueda por nombre en el array practicas y luego, en PracticasContainer se muestren sólo las practicas que coinciden en nombre con el texto ingresado en el input. Además, si no se realizó ninguna búsqueda, que el PracticasContainer muestre el listado de todas las prácticas.
