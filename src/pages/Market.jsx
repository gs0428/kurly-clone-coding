import { useRecoilValue } from "recoil";
import Banner from "../components/main/Banner";
import Products from "../components/main/Products";
import { marketBannerState } from "../recoil/banner";
import { marketProductState } from "../recoil/products";
import BigSale from "../components/main/BigSale";
import SpecialPrice from "../components/main/SpecialPrice";

export default function Market() {
  const banner = useRecoilValue(marketBannerState);
  const product = useRecoilValue(marketProductState);
  return (
    <>
      <Banner banner={banner} />
      <Products product={product} />
      <BigSale />
      <SpecialPrice />
    </>
  );
}
