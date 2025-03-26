import { LetterCv2, LetterUv2, Word } from "../letters";

const TextUc = () => {
  const gradientId = "paint0_linear_letter_uc";
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
      <Word scale={70} letters={[LetterUv2, LetterCv2]} fill={fill} />
    </>
  );
};

export default TextUc;
