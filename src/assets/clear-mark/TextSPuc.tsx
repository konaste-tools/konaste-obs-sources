import { Word } from "../letters";

const TextSPuc = () => {
  const gradientId = "paint0_linear_letter_spuc";
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
        letters={"S-PUC"}
        // letters={[LetterSv2, Dash, LetterPv2, LetterUv2, LetterCv2]}
        fill={fill}
        className="w-[120%] h-auto transform translate-x-[-10%]"
      />
    </>
  );
};

export default TextSPuc;
