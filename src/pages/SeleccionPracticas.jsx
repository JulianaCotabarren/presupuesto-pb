import OperacionesContainer from "../components/OperacionesContainer";
import PracticasSeleccionadasContainer from "../components/PracticasSeleccionadasContainer";
import TotalContainer from "../components/TotalContainer";

const SeleccionPracticas = () => {
  return (
    <>
      <OperacionesContainer />
      <PracticasSeleccionadasContainer />
      <TotalContainer mostrarImprimir={true} />
    </>
  );
};

export default SeleccionPracticas;
