import styled from "styled-components";
import { MdPrint } from "react-icons/md";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PracticasContext } from "../context/PracticasProvider";

const StyledTotalContainer = styled.div`
  height: 2.5rem;
  background-color: ${(props) =>
    props.mostrarImprimir ? "#ececec" : "transparent"};
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.mostrarImprimir ? "center" : "end")};
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
  border: ${(props) =>
    props.mostrarImprimir
      ? "0.1rem solid #348d00"
      : "0.1rem solid transparent"};
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

const TotalContainer = ({ mostrarImprimir = false }) => {
  const { total, handleTotalChange } = useContext(PracticasContext);
  const navigate = useNavigate();

  const handlePrint = () => {
    navigate("/imprimir");
  };

  return (
    <StyledTotalContainer mostrarImprimir={mostrarImprimir}>
      <StyledLabel>Total:</StyledLabel>
      <StyledInput
        value={`$${total}`}
        onChange={handleTotalChange}
        mostrarImprimir={mostrarImprimir}
      />
      {mostrarImprimir && (
        <StyledButton onClick={handlePrint}>
          <MdPrint />
        </StyledButton>
      )}
    </StyledTotalContainer>
  );
};

export default TotalContainer;
