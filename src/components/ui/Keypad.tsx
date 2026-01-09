import Button from "./Button";
interface KeypadProps {
  handleNumber: (num: string) => void;
  handleOperator: (op: string) => void;
  calculate: () => void;
  clear: () => void;
}
const Keypad = ({
  handleNumber,
  handleOperator,
  calculate,
  clear,
}: KeypadProps) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      <Button onClick={() => handleNumber("7")}>7</Button>
      <Button onClick={() => handleNumber("8")}>8</Button>
      <Button onClick={() => handleNumber("9")}>9</Button>
      <Button onClick={() => handleOperator("/")}>/</Button>
      <Button onClick={() => handleNumber("4")}>4</Button>
      <Button onClick={() => handleNumber("5")}>5</Button>
      <Button onClick={() => handleNumber("6")}>6</Button>
      <Button onClick={() => handleOperator("*")}>*</Button>
      <Button onClick={() => handleNumber("3")}>3</Button>
      <Button onClick={() => handleNumber("2")}>2</Button>
      <Button onClick={() => handleNumber("1")}>1</Button>
      <Button onClick={() => handleOperator("-")}>-</Button>
      <Button onClick={() => calculate()}>=</Button>{" "}
      <Button onClick={() => handleNumber("0")}>0</Button>
      <Button onClick={() => handleOperator("+")}>+</Button>
      <Button onClick={() => handleOperator("*")}>x</Button>
      <Button onClick={clear}>C</Button>
    </div>
  );
};

export default Keypad;
