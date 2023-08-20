import { useRecoilValue } from "recoil";
import Banner from "../components/main/Banner";
import Products from "../components/main/Products";
import { beautyBannerState } from "../recoil/banner";
import { beautyProductState } from "../recoil/products";

export default function Beauty() {
  const banner = useRecoilValue(beautyBannerState);
  const product = useRecoilValue(beautyProductState);
  return (
    <>
      <Banner banner={banner} />
      <Products product={product} />
    </>
  );
}
