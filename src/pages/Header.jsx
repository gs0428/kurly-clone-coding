import Top from "../components/header/Top";
import Mid from "../components/header/Mid";
import Bot from "../components/header/Bot";
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
