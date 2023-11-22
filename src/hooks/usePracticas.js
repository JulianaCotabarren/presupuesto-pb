import { useEffect, useState } from "react";
/* import db from "../data/db.json"; */

const usePracticas = () => {
  const [practicas, setPracticas] = useState([]);

  const getPracticas = async () => {
    try {
      const response = await fetch("../src/backend/db.json");
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const info = await response.json();
      const practicas = info.practicas;
      setPracticas(practicas);
      console.log(practicas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPracticas();
  }, []);

  return {
    practicas,
    getPracticas,
  };
};

export default usePracticas;
