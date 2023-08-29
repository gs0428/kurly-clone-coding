import Layout from "../src/components/Layout";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";
import { useRecoilValue } from "recoil";
import { isMarketState } from "./recoil/kurly";
function App() {
  const isMarket = useRecoilValue(isMarketState);
  return <Layout>{isMarket ? <Market /> : <Beauty />}</Layout>;
}

export default App;
