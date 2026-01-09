import Footer from "./ui/Footer";
import Keypad from "./ui/Keypad";
import Display from "./ui/Display";
import useCalculator from "./hooks/useCalculator";
const Calculator = () => {
  const {
    display,
    expression,
    handleNumber,
    handleOperator,
    calculate,
    clear,
  } = useCalculator();

  return (
    <div className="w-80 backdrop-blur-xl bg-white/20 rounded-2xl shadow-xl p-4 m-2">
      <Display display={display} expression={expression} />
      <Keypad
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        calculate={calculate}
        clear={clear}
      />
      <Footer />
    </div>
  );
};

export default Calculator;
