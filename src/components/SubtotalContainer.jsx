import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { PracticasContext } from "../context/PracticasProvider";

const StyledSubtotalContainer = styled.div`
  height: 2rem;
  background-color: #ececec;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledSubtotal = styled.label`
  font-size: 1rem;
  width: 5rem;
  margin-left: 43rem;
  margin-right: 0.5rem;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 5rem;
  margin-right: 1rem;
  border: 0.5px solid #ff6105;
  text-align: center;
`;

const SubtotalContainer = () => {
  const { practicasSeleccionadas } = useContext(PracticasContext);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const sumaResultados = practicasSeleccionadas.reduce(
      (total, practica) => total + parseFloat(practica.resultadoCalculo),
      0
    );
    setSubTotal(sumaResultados);
  }, [practicasSeleccionadas]);

  return (
    <StyledSubtotalContainer>
      <StyledSubtotal>Subtotal:</StyledSubtotal>
      <StyledInput readOnly value={`$${subTotal.toFixed(2)}`} />
    </StyledSubtotalContainer>
  );
};

export default SubtotalContainer;
