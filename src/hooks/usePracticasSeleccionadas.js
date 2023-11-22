import { useEffect, useState } from "react";

const usePracticasSeleccionadas = () => {
  const [practicasSeleccionadas, setPracticasSeleccionadas] = useState([]);

  const getPracticasSeleccionadas = async () => {
    try {
      const response = await fetch("../src/backend/db.json");
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const info = await response.json();
      const practicasSeleccionadas = info.practicasSeleccionadas;
      setPracticasSeleccionadas(practicasSeleccionadas);
      console.log(practicasSeleccionadas);
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

      const nuevasPracticasSeleccionadas = [
        ...data.practicasSeleccionadas,
        practica,
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
    } catch (error) {
      console.error("Error al agregar práctica seleccionada", error);
    }
  };

  useEffect(() => {
    getPracticasSeleccionadas();
  }, []);

  return {
    practicasSeleccionadas,
    getPracticasSeleccionadas,
    agregarPracticaSeleccionada,
  };
};

export default usePracticasSeleccionadas;
