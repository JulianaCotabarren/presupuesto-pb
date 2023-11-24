import { useEffect, useState } from "react";

const usePracticasSeleccionadas = () => {
  const [practicasSeleccionadas, setPracticasSeleccionadas] = useState([]);
  const storedValue = localStorage.getItem("valorUb");
  const [valorUb, setValorUb] = useState(
    storedValue ? parseFloat(storedValue) : 0
  );

  useEffect(() => {
    localStorage.setItem("valorUb", valorUb);
  }, [valorUb]);

  const handleValorUbChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValorUb(isNaN(newValue) ? 0 : newValue);
  };

  const getPracticasSeleccionadas = async () => {
    try {
      const response = await fetch("../src/backend/db.json");
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const info = await response.json();
      const practicasSeleccionadas = info.practicasSeleccionadas.map(
        (practica) => ({
          ...practica,
          resultadoCalculo: practica.ub * valorUb,
        })
      );
      setPracticasSeleccionadas(practicasSeleccionadas);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarPracticaSeleccionada = async (practica) => {
    try {
      const response = await fetch("../src/backend/db.json");
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      const practicaExistente = practicasSeleccionadas.find(
        (p) => p.id === practica.id
      );
      if (!practicaExistente) {
        const resultadoCalculo = practica.ub * valorUb;
        const nuevasPracticasSeleccionadas = [
          ...practicasSeleccionadas,
          { ...practica, resultadoCalculo },
        ];

        await fetch("../src/backend/db.json", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            practicasSeleccionadas: nuevasPracticasSeleccionadas,
          }),
        });
        setPracticasSeleccionadas(nuevasPracticasSeleccionadas);
      } else {
        alert(
          `La práctica correspondiente al código ${practica.id} ya fue seleccionada.`
        );
      }
    } catch (error) {
      console.error("Error al agregar práctica seleccionada", error);
    }
  };

  const eliminarPracticaSeleccionada = async (practicaId) => {
    try {
      const response = await fetch("../src/backend/db.json");
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      const nuevasPracticasSeleccionadas = practicasSeleccionadas.filter(
        (p) => p.id !== practicaId
      );

      await fetch("../src/backend/db.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          practicasSeleccionadas: nuevasPracticasSeleccionadas,
        }),
      });

      setPracticasSeleccionadas(nuevasPracticasSeleccionadas);
    } catch (error) {
      console.error("Error al eliminar práctica seleccionada", error);
    }
  };

  useEffect(() => {
    getPracticasSeleccionadas();
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
  };
};

export default usePracticasSeleccionadas;
