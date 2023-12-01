import { useEffect, useState } from "react";
import data from "../data/db";

/* const db = "../src/data/db.json"; */

const usePracticas = () => {
  const [practicas, setPracticas] = useState([]);

  /*   const getPracticas = async () => {
    try {
      const response = await fetch(db);
      if (!response.ok) {
        throw new Error(
          `Error al cargar datos:${response.status} ${response.statusText}`
        );
      }
      const info = await response.json();
      const practicas = info.practicas;
      setPracticas(practicas);
    } catch (error) {
      console.log(error);
    }
  }; */

  const getPracticas = async () => {
    try {
      const practicas = data.practicas;
      setPracticas(practicas);
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
