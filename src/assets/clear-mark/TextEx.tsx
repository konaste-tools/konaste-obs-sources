import { LetterCv2, LetterMv2, LetterOv2, LetterPv2, Word } from "../letters";

const TextEx = () => {
  const gradientId = "paint0_linear_letter_ex";
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
      <Word
        scale={70}
        letters={[LetterCv2, LetterOv2, LetterMv2, LetterPv2]}
        fill={fill}
      />
    </>
  );
};

export default TextEx;
