import { useRecoilValue } from "recoil";
import Banner from "../components/main/Banner";
import Products from "../components/main/Products";
import { marketBannerState } from "../recoil/banner";
import { marketProductState } from "../recoil/products";

export default function Market() {
  const banner = useRecoilValue(marketBannerState);
  const product = useRecoilValue(marketProductState);
  return (
    <>
      <Banner banner={banner} />
      <Products product={product} />
    </>
  );
}
