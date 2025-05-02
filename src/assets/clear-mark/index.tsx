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
    <div className="aspect-square">
      <div className={"relative w-full h-full"}>
        <div className="absolute inset-0 flex items-center justify-center">
          <ClearHexagon markType={markType} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4">
            <TextComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClearMark;
