const LetterPv2 = ({ fill }: { fill: string }) => {
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 14H14V15V71H1V1H57V14H15Z"
        stroke="black"
        strokeWidth="2"
        fill={fill}
      />
      <path
        d="M30.4142 56L17.4142 43H57H58V42V16H61.5858L65.2929 19.7071L65.5858 20H66H68.5858L71 22.4142V56H30.4142Z"
        stroke="black"
        strokeWidth="2"
        fill={fill}
      />
    </svg>
  );
};

export default LetterPv2;
