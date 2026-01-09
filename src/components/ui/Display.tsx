import { useEffect, useRef } from "react";
interface DisplayProps {
  display: string;
  expression: string;
}
const Display = ({ display, expression }: DisplayProps) => {
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayRef.current.scrollHeight;
    }
  }, [display]);

  return (
    <div className="bg-black/30 shadow-inner rounded-md p-2 mb-2">
      <div className="h-7 text-right text-sm text-white/80 overflow-y-auto">
        {expression}
      </div>

      <div
        ref={displayRef}
        className="h-9 overflow-y-auto overflow-x-hidden text-right text-2xl text-white break-all"
      >
        {display}
      </div>
    </div>
  );
};

export default Display;
