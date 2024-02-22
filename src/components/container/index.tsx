import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <>
      <div className={twMerge("container mx-auto p-4", className)}>
        {children}
      </div>
    </>
  );
}
