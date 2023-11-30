import { useState } from "react";

const useTotal = () => {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9.,]/g, "");
    setTotal(newValue);
  };

  return {
    total,
    handleTotalChange,
    setTotal,
  };
};

export default useTotal;
