import Top from "../components/layout/header/Top";
import Mid from "../components/layout/header/Mid";
import Bot from "../components/layout/header/Bot";
import { useRecoilValue } from "recoil";
import { beautyCtgState, marketCtgState } from "../recoil/ctg";
import { isMarketState } from "../recoil/kurly";

export default function Header() {
  const market = useRecoilValue(marketCtgState);
  const beauty = useRecoilValue(beautyCtgState);
  const isMarket = useRecoilValue(isMarketState);
  const ctg = isMarket ? market : beauty;
  return (
    <>
      <Top />
      <Mid />
      <Bot ctgs={ctg} />
    </>
  );
}
