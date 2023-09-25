interface ChildProps {
  textColor: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// interface ChildProps {
//   color: string;
//   onClick: () => void;
//   children?: React.ReactNode;
// }

export const Child = ({ textColor, onClick }: ChildProps) => {
  return (
    <div>
      <h2 style={{ color: textColor }}>Color is: {textColor}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildFC: React.FC<ChildProps> = ({
  textColor,
  onClick,
  children,
}) => {
  return (
    <>
      <h2 style={{ color: textColor }}>Color is: {textColor}</h2>
      <button onClick={onClick}>Click me</button>
      {children}
    </>
  );
};
