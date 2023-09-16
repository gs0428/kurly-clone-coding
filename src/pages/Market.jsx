import { useRecoilValue } from "recoil";
import Banner from "../components/main/Banner";
import Products from "../components/main/Products";
import { marketBannerState } from "../recoil/banner";
import { marketProductState } from "../recoil/products";
import BigSale from "../components/main/BigSale";
import SpecialPrice from "../components/main/SpecialPrice";
import * as C from "../styles/common.style";
import { useEffect, useState } from "react";
import { modalState } from "../recoil/modal";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

export default function Market() {
  const banner = useRecoilValue(marketBannerState);
  const product = useRecoilValue(marketProductState);
  const [visible, setVisible] = useState(false);
  const modal = useRecoilValue(modalState);

  useEffect(() => {
    let target = document.querySelector("#promotion");
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
        console.log(entry);
      });
    }, options);
    observer.observe(target);
  }, []);

  return (
    <>
      {modal && createPortal(<Modal />, document.body)}
      <Banner banner={banner} />
      <Products product={product} />
      <BigSale />
      <C.Promotion src="https://product-image.kurly.com/banner/random-band/pc/img/ac8cf6be-9a41-4bab-a4f2-edc79e9d5b8d.jpg" alt="none" id="promotion" />
      {visible && <SpecialPrice />}
    </>
  );
}
