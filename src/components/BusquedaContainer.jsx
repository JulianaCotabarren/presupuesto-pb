import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const StyledContainer = styled.div`
  background-color: #ececec;
  height: 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  width: 15rem;
`;

const StyledButton = styled.button`
  width: 1rem;
  height: 1.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  margin-left: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const BusquedaContainer = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    onResetForm();
  };

  const redirectToMain = () => {
    navigate("/");
  };

  const reset = () => {
    onSearch("");
    onResetForm();
  };

  return (
    <>
      <StyledButton onClick={redirectToMain}>
        <IoMdArrowRoundBack />
      </StyledButton>
      <StyledContainer>
        <StyledLabel>Buscar:</StyledLabel>
        <StyledForm onSubmit={onSearchSubmit}>
          <StyledInput
            type="text"
            name="searchText"
            autoComplete="off"
            placeholder="Nombre Práctica"
            value={searchText}
            onChange={onInputChange}
          ></StyledInput>
          <StyledButton onClick={onSearchSubmit}>
            <MdOutlineSearch />
          </StyledButton>
          <StyledButton onClick={reset}>
            <GrPowerReset />
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default BusquedaContainer;
