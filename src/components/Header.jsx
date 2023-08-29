import Top from "../components/layout/header/Top";
import Mid from "../components/layout/header/Mid";
import Bot from "../components/layout/header/Bot";
import { useRecoilValue } from "recoil";
import { beautyCtgState, marketCtgState } from "../recoil/ctg";

export default function Header() {
  const location = window.location.pathname;
  const market = useRecoilValue(marketCtgState);
  const beauty = useRecoilValue(beautyCtgState);
  const ctg = location === "/" ? market : beauty;
  return (
    <>
      <Top />
      <Mid />
      <Bot ctgs={ctg} />
    </>
  );
}
