import "./App.css";
import BusquedaContainer from "./components/BusquedaContainer";
import PracticasContainer from "./components/PracticasContainer";
import PracticasSeleccionadasContainer from "./components/PracticasSeleccionadasContainer";
import PracticasProvider from "./context/PracticasProvider";

function App() {
  return (
    <PracticasProvider>
      <BusquedaContainer />
      <PracticasContainer />
      <PracticasSeleccionadasContainer />
    </PracticasProvider>
  );
}

export default App;
