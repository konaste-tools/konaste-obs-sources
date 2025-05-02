import Number0 from "./Number0.tsx";
import Number1 from "./Number1.tsx";
import Number2 from "./Number2.tsx";
import Number3 from "./Number3.tsx";
import Number4 from "./Number4.tsx";
import Number5 from "./Number5.tsx";
import Number6 from "./Number6.tsx";
import Number7 from "./Number7.tsx";
import Number8 from "./Number8.tsx";
import Number9 from "./Number9.tsx";
import { Word } from "../letters";

const RenderedNumber = ({
  value,
  length,
  percentage = false,
}: {
  value: number | string | Array<string>;
  length?: number;
  percentage?: boolean;
}) => {
  const gradientId = "paint0_linear_rendered_number";
  const fill = `url(#${gradientId})`;
  let display = [];

  if (typeof value === "number") {
    display = ("" + value)
      .padStart(length || value.toString().length, "0")
      .split("");
  } else if (typeof value === "string") {
    display = value.split("");
  } else {
    display = value;
  }
  if (percentage) {
    display = [...display, "%"];
  }

  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <linearGradient
            id={gradientId}
            x1="72"
            y1="0"
            x2="0"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DADADA" />
            <stop offset="0.5" stopColor="#EAEAEA" />
            <stop offset="0.5" stopColor="#B0BCCA" />
            <stop offset="1" stopColor="#E5EFF9" />
          </linearGradient>
        </defs>
      </svg>
      <Word
        letters={display.join("")}
        fill={fill}
        className="w-full max-w-full gap-0.5"
      />
    </div>
  );
};

export default RenderedNumber;

export {
  Number0,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
};
