import type { ReactNode } from "react";

interface CalculatorContainerProps {
  children: ReactNode;
}
const Container = ({ children }: CalculatorContainerProps) => {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      {children}
    </main>
  );
};

export default Container;
