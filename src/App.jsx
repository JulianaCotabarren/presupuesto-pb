import "./App.css";
import PracticasProvider from "./context/PracticasProvider";
import ListadoPracticas from "./pages/ListadoPracticas";
import SeleccionPracticas from "./pages/SeleccionPracticas";

function App() {
  return (
    <PracticasProvider>
      {/* <ListadoPracticas /> */}
      <SeleccionPracticas />
    </PracticasProvider>
  );
}

export default App;
