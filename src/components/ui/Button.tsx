interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        h-10
        flex items-center justify-center
        cursor-pointer
        rounded-xl
        text-white
        font-medium
        bg-[#df9fbb]
        border border-white/60
        shadow-md
        hover:bg-[#da79a38f]
        transition-colors duration-200
        
      "
    >
      {children}
    </button>
  );
};

export default Button;
