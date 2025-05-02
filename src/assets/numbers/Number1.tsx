const Number1 = ({ fill }: { fill: string }) => {
  return (
    <svg
      className="w-full h-full"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="number-1"
    >
      <path
        d="M37 17V16H36H21.4142L36.4142 1H52V71H37V17Z"
        fill={fill}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Number1;
