import { useEffect, useState } from "react";
import data from "../data/db";

const usePracticas = () => {
  const [practicas, setPracticas] = useState([]);

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
