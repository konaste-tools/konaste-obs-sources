import "./clearmark.css";
import ClearHexagon from "./ClearHexagon.tsx";
import TextComp from "./TextComp.tsx";
import TextPuc from "./TextPuc.tsx";
import TextEx from "./TextEx.tsx";
import TextUc from "./TextUc.tsx";
import TextPlayed from "./TextPlayed.tsx";
import { ClearMarkType } from "../../clients/KonasteModels.ts";
import TextSPuc from "./TextSPuc.tsx";

const ClearMark = ({ markType }: { markType: ClearMarkType }) => {
  const TextComponent = (() => {
    switch (markType) {
      case "spuc":
        return TextSPuc;
      case "puc":
        return TextPuc;
      case "comp":
        return TextComp;
      case "ex":
        return TextEx;
      case "uc":
        return TextUc;
      case "played":
        return TextPlayed;
      case "no":
        return TextPlayed;
    }
  })();
  return (
    <div className={"relative w-full h-full flex"}>
      {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={markType + " object-fill"}
      width="100%"
      height="100%"
    > */}
      <ClearHexagon markType={markType} />
      <TextComponent />
      {/* </svg> */}
    </div>
  );
};
export default ClearMark;
