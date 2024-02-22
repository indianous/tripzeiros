import NextLink from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps {
  children?: ReactNode;
  className?: string;
  href: string;
}

export function Link({ children, className, href }: LinkProps) {
  return (
    <>
      <NextLink href={href} className={twMerge("", className)}>
        {children}
      </NextLink>
    </>
  );
}
