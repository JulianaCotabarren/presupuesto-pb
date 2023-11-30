import { PDFViewer } from "@react-pdf/renderer";
import SeccionAImprimir from "../components/SeccionAImprimir";
import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";

const ImprimirPracticas = () => {
  const { practicasSeleccionadas, total } = useContext(PracticasContext);
  return (
    <PDFViewer style={{ width: "90vw", height: "90vh" }}>
      <SeccionAImprimir
        practicasSeleccionadas={practicasSeleccionadas}
        total={total}
      />
    </PDFViewer>
  );
};

export default ImprimirPracticas;
