import { useEffect, useState } from "react";

const useValorUb = () => {
  const [valorUb, setValorUb] = useState(localStorage.getItem("valorUb") || "");

  useEffect(() => {
    localStorage.setItem("valorUb", valorUb);
  }, [valorUb]);

  const handleValorUbChange = (e) => {
    setValorUb(e.target.value);
  };

  return {
    valorUb,
    handleValorUbChange,
  };
};

export default useValorUb;
