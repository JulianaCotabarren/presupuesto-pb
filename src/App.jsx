import "./App.css";
import BusquedaContainer from "./components/BusquedaContainer";
import PracticasContainer from "./components/PracticasContainer";
import PracticasProvider from "./context/PracticasProvider";

function App() {
  return (
    <PracticasProvider>
      <BusquedaContainer />
      <PracticasContainer />
    </PracticasProvider>
  );
}

export default App;
