const LetterS = ({ gradient }: { gradient: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`url(#${gradient})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.5 5.5V0.5H9.5L0.5 9.5V14.5H18.5V18.5H0.5V23.5H14.5L23.5 14.5V9.5H20.5H5.5V5.5H23.5Z" />
    </svg>
  );
};

export default LetterS;
