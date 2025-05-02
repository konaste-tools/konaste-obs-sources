import { Word } from "../letters";

const TextComp = () => {
  const gradientId = "paint0_linear_letter_comp";
  const fill = `url(#${gradientId})`;

  return (
    <>
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <linearGradient
            id={gradientId}
            x1="45"
            y1="12"
            x2="45"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--letter-colour-1)" />
            <stop stopColor="var(--letter-colour-2)" offset="1" />
          </linearGradient>
        </defs>
      </svg>
      <Word letters="COMP" fill={fill} />
    </>
  );
};

export default TextComp;
