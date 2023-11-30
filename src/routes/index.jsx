import { Route, Routes } from "react-router-dom";
import SeleccionPracticas from "../pages/SeleccionPracticas";
import ListadoPracticas from "../pages/ListadoPracticas";
import ImprimirPracticas from "../pages/ImprimirPracticas";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SeleccionPracticas />} />
        <Route path="/buscar" element={<ListadoPracticas />} />
        <Route path="/imprimir" element={<ImprimirPracticas />} />
      </Routes>
    </>
  );
};

export default Router;
