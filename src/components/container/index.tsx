import React from "react";

type ContainerProps = { children: React.ReactNode; className?: string };

export default function Container({ children, className }: ContainerProps) {
  return <div className={`container m-auto px-5 ${className}`}>{children}</div>;
}
