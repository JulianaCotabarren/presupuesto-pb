import { Route, Routes } from "react-router-dom";
import SeleccionPracticas from "../pages/SeleccionPracticas";
import ListadoPracticas from "../pages/ListadoPracticas";
import ImprimirContainer from "../components/ImprimirContainer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SeleccionPracticas />} />
        <Route path="/buscar" element={<ListadoPracticas />} />
        <Route path="/imprimir" element={<ImprimirContainer />} />
      </Routes>
    </>
  );
};

export default Router;
