import { useState, useEffect, useRef } from "react";
import { evaluate } from "mathjs";
const useCalculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [expression, setExpression] = useState<string>("");
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayRef.current.scrollHeight;
    }
  }, [display]);

  const handleNumber = (num: string) => {
    setDisplay((prev) => {
      return prev === "0" ? num : prev + num;
    });
  };

  const handleOperator = (op: string) => {
    if (display === "0") return;
    setExpression((prev) => `${prev} ${display} ${op}`);
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = evaluate(expression + display);
      setDisplay(result.toString());
      setExpression("");
    } catch {
      setDisplay("Error");
    }
  };
  const clear = () => {
    setDisplay("0");
    setExpression("");
  };
  return {
    display,
    expression,
    handleNumber,
    handleOperator,
    calculate,
    clear,
    displayRef,
  };
};

export default useCalculator;
