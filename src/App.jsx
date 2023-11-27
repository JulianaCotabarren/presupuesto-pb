import "./App.css";
import PracticasProvider from "./context/PracticasProvider";
import Router from "./routes";

function App() {
  return (
    <PracticasProvider>
      <Router />
    </PracticasProvider>
  );
}

export default App;
