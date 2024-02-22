import { ElementType } from "react";

interface NavItemIconProps {
  icon: ElementType;
}

export function NavItemIcon({ icon: Icon }: NavItemIconProps) {
  return (
    <>
      <div>
        <Icon size={24} />
      </div>
    </>
  );
}
