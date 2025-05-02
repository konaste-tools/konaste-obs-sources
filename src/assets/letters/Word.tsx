import Number0 from "../numbers/Number0.tsx";
import Number1 from "../numbers/Number1.tsx";
import Number2 from "../numbers/Number2.tsx";
import Number3 from "../numbers/Number3.tsx";
import Number4 from "../numbers/Number4.tsx";
import Number5 from "../numbers/Number5.tsx";
import Number6 from "../numbers/Number6.tsx";
import Number7 from "../numbers/Number7.tsx";
import Number8 from "../numbers/Number8.tsx";
import Number9 from "../numbers/Number9.tsx";
import { Dash, Percent, Period } from "../special";
import {
  LetterAv2,
  LetterCv2,
  LetterDv2,
  LetterEv2,
  LetterLv2,
  LetterMv2,
  LetterOv2,
  LetterPv2,
  LetterSv2,
  LetterUv2,
  LetterYv2,
} from "./index.ts";

interface WordProps {
  letters: string;
  fill: string;
  className?: string;
}

const asSvg = (e: string) => {
  switch (e) {
    case "A":
      return LetterAv2;
    case "C":
      return LetterCv2;
    case "D":
      return LetterDv2;
    case "E":
      return LetterEv2;
    case "L":
      return LetterLv2;
    case "M":
      return LetterMv2;
    case "O":
      return LetterOv2;
    case "P":
      return LetterPv2;
    case "S":
      return LetterSv2;
    case "U":
      return LetterUv2;
    case "Y":
      return LetterYv2;
    case "0":
      return Number0;
    case "1":
      return Number1;
    case "2":
      return Number2;
    case "3":
      return Number3;
    case "4":
      return Number4;
    case "5":
      return Number5;
    case "6":
      return Number6;
    case "7":
      return Number7;
    case "8":
      return Number8;
    case "9":
      return Number9;
    case "-":
      return Dash;
    case ".":
      return Period;
    case "%":
      return Percent;
    default:
      return Number0;
  }
};

const Word = ({ letters, fill, className = "" }: WordProps) => {
  return (
    <div
      className={`grid grid-cols-${letters.length} gap-[1%] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${letters.length}, minmax(0, 1fr))`, // Ensures equal column sizes
      }}
      data-testid={letters}
    >
      {[...letters]
        .map((l) => asSvg(l))
        .map((LetterComponent, index) => (
          <div key={index} className={`aspect-square flex justify-center`}>
            <LetterComponent fill={fill} />
          </div>
        ))}
    </div>
  );
};

export default Word;
