import React from "react";

interface WordProps {
  letters: React.ElementType[];
  scale?: number;
  fill: string;
}

const Word = ({ letters, scale = 100, fill }: WordProps) => {
  //   const lettersArray = React.Children.toArray(children);
  return (
    <div
      className={`absolute flex justify-center items-center pointer-events-none`}
      style={{
        width: `${scale}%`,
        height: `${scale}%`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex w-full h-full gap-1">
        {letters.map((LetterComponent, index) => (
          <div
            key={index}
            style={{
              flex: `1 1 ${100 / letters.length}%`,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LetterComponent fill={fill} />
          </div>
        ))}
        {/* {lettersArray.map((letter, index) => (
          <div
            key={index}
            style={{
              flex: `1 1 ${100 / lettersArray.length}%`,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {letter}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Word;
