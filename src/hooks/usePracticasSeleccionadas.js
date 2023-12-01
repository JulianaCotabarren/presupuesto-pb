import { useEffect, useState } from "react";
import data from "../data/db";

const usePracticasSeleccionadas = () => {
  const [practicasSeleccionadas, setPracticasSeleccionadas] = useState([]);
  const storedValue = localStorage.getItem("valorUb");
  const [valorUb, setValorUb] = useState(
    storedValue ? parseFloat(storedValue) : 0
  );
  const [nroPractica, setNroPractica] = useState(1);

  useEffect(() => {
    localStorage.setItem("valorUb", valorUb);
  }, [valorUb]);

  const handleValorUbChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValorUb(isNaN(newValue) ? 0 : newValue);
  };

  const getPracticasSeleccionadas = () => {
    const practicasSeleccionadas = data.practicasSeleccionadas.map(
      (practica) => ({
        ...practica,
        resultadoCalculo: practica.ub * valorUb,
      })
    );
    setPracticasSeleccionadas(practicasSeleccionadas);
  };

  const agregarPracticaSeleccionada = (practica) => {
    const practicaExistente = practicasSeleccionadas.find(
      (p) => p.id === practica.id
    );
    if (!practicaExistente) {
      const resultadoCalculo = practica.ub * valorUb;
      const nuevasPracticasSeleccionadas = [
        ...practicasSeleccionadas,
        { ...practica, resultadoCalculo },
      ];

      setPracticasSeleccionadas(nuevasPracticasSeleccionadas);

      data.practicasSeleccionadas = nuevasPracticasSeleccionadas;
    } else {
      alert(
        `La práctica correspondiente al código ${practica.id} ya fue seleccionada.`
      );
    }
  };

  const eliminarPracticaSeleccionada = (practicaId) => {
    const nuevasPracticasSeleccionadas = practicasSeleccionadas.filter(
      (p) => p.id !== practicaId
    );

    setPracticasSeleccionadas(nuevasPracticasSeleccionadas);

    data.practicasSeleccionadas = nuevasPracticasSeleccionadas;
  };

  useEffect(() => {
    getPracticasSeleccionadas();
    setNroPractica(practicasSeleccionadas.length + 1);
  }, []);

  useEffect(() => {
    const calcularResultados = () => {
      const resultados = practicasSeleccionadas.map((practica) => ({
        ...practica,
        resultadoCalculo: practica.ub * valorUb,
      }));
      setPracticasSeleccionadas(resultados);
    };
    calcularResultados();
  }, [valorUb]);

  return {
    practicasSeleccionadas,
    getPracticasSeleccionadas,
    agregarPracticaSeleccionada,
    eliminarPracticaSeleccionada,
    valorUb,
    handleValorUbChange,
    nroPractica,
    setNroPractica,
  };
};

export default usePracticasSeleccionadas;
