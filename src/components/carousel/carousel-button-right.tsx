import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselButtonRightProps {
  icon: ElementType;
  className?: string;
  value: number;
  action: (value: number) => void;
}

export default function CarouselButtonRight({
  icon: Icon,
  className,
  value,
  action,
}: CarouselButtonRightProps) {
  return (
    <>
      <button
        className={twMerge(
          "hover:bg-white opacity-25 flex align-center absolute top-0 right-0 h-full w-auto p-3",
          className
        )}
        style={{
          cursor: "pointer",
          transition: "0.6s ease",
          userSelect: "none",
        }}
        onClick={() => action(value)}
      >
        <Icon size={18} />
      </button>
    </>
  );
}
