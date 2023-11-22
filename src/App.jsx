import "./App.css";
import PracticasContainer from "./components/PracticasContainer";
import PracticasProvider from "./context/PracticasProvider";

function App() {
  return (
    <PracticasProvider>
      <PracticasContainer />
    </PracticasProvider>
  );
}

export default App;
