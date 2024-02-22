interface NavItemLabelProps {
  text: string;
}

export function NavItemLabel({ text }: NavItemLabelProps) {
  return (
    <>
      <span className="font-bold">{text}</span>
    </>
  );
}
