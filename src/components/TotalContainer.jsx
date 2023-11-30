import styled from "styled-components";
import { MdPrint } from "react-icons/md";
import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import { Link } from "react-router-dom";

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
  const { total, handleTotalChange } = useContext(PracticasContext);

  return (
    <StyledTotalContainer>
      <StyledLabel>Total:</StyledLabel>
      <StyledInput value={`$${total}`} onChange={handleTotalChange} />
      <Link to="/imprimir">
        <StyledButton>
          <MdPrint />
        </StyledButton>
      </Link>
    </StyledTotalContainer>
  );
};

export default TotalContainer;
