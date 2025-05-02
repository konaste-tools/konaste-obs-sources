const Number2 = ({ fill }: { fill: string }) => {
  return (
    <svg
      className="w-full h-full"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="number-2"
    >
      <path
        d="M55 16H1V1H54.5858L71 17.4142V44H17H16V45V55V56H17H71V71H1V45.4142L17.4142 29H42.5858L54.2929 40.7071L56 42.4142V40V17V16H55Z"
        fill={fill}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Number2;
