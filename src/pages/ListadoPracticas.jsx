import { useState } from "react";
import BusquedaContainer from "../components/BusquedaContainer";
import PracticasContainer from "../components/PracticasContainer";

const ListadoPracticas = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <>
      <BusquedaContainer onSearch={handleSearch} />
      <PracticasContainer searchText={searchText} />
    </>
  );
};

export default ListadoPracticas;
