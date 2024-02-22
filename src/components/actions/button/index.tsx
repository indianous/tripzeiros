import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  children?: ReactNode;
}
export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <>
      <button className={twMerge("px-4 py-2 rounded", className)} {...rest}>
        {children}
      </button>
    </>
  );
}
