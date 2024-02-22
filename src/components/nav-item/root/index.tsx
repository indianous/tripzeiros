import { ComponentProps, ReactNode } from "react";
import { Link } from "../../link";
import { twMerge } from "tailwind-merge";

interface NavItemRootProps extends ComponentProps<"a"> {
  children: ReactNode;
  className?: string;
  href: string;
}

export function NavItemRoot({
  children,
  className = "",
  href,
  ...rest
}: NavItemRootProps) {
  return (
    <>
      <Link
        href={href}
        className={twMerge(
          "hover:bg-zinc-300 flex rounded-full w-full px-3 py-2 gap-x-2 align-items-center",
          // "hover:bg-zinc-300 flex rounded-full w-full px-3 py-2 gap-x-2 align-items-center",
          className
        )}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
}
