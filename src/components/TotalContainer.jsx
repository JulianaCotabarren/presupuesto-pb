import styled from "styled-components";
import { MdPrint } from "react-icons/md";
import { useState } from "react";

const StyledTotalContainer = styled.div`
  height: 2.5rem;
  background-color: #ececec;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  width: 5rem;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 5rem;
  height: 1.2rem;
  border: 0.1rem solid #348d00;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 1rem;
  font-size: 1.3rem;
  margin-left: 1.5rem;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TotalContainer = () => {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9.,]/g, ""); // Eliminar cualquier caracter que no sea un dígito
    setTotal(newValue);
  };

  const handlePrint = () => {
    console.log("print");
  };

  return (
    <StyledTotalContainer>
      <StyledLabel>Total:</StyledLabel>
      <StyledInput value={`$${total}`} onChange={handleTotalChange} />
      <StyledButton onClick={handlePrint}>
        <MdPrint />
      </StyledButton>
    </StyledTotalContainer>
  );
};

export default TotalContainer;
