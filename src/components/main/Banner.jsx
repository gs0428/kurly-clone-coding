import { useEffect, useState } from "react";
import * as S from "../../styles/main/banner.style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { marketBannerState, beautyBannerState } from "../../recoil/banner";
import { kurlyState } from "../../recoil/kurly";

export default function Banner() {
  const market = useRecoilValue(marketBannerState);
  const beauty = useRecoilValue(beautyBannerState);
  const kurly = useRecoilValue(kurlyState);
  const [images, setImages] = useState(kurly ? market : beauty);
  const [slideItems, setSlideItems] = useState();
  const [maxSlide, setMaxSlide] = useState(0);
  const [cur, setCur] = useState(0);
  const offset = [0, 1900, 3800, 5700, 7600, 9500, 11400, 13300, 15200, 17100, 19000, 20900, 22800, 24700, 26600, 28500];

  useEffect(() => {
    setSlideItems(document.querySelectorAll(".images"));
    setMaxSlide(document.querySelectorAll(".images").length);
  }, []);
  useEffect(() => {
    setMaxSlide(images.length);
    setCur(0);
    setImages(images);
  }, [kurly]);

  const moveLeft = () => {
    setCur((n) => (n - 1 === -1 ? images.length - 1 : n - 1));
  };
  const moveRight = () => {
    setCur((n) => (n + 1 === images.length ? 0 : n + 1));
  };

  if (slideItems !== undefined) {
    slideItems.forEach((i) => {
      i.style.left = `${-offset[cur]}px`;
    });
  }

  return (
    <S.Container>
      <S.SliderWrap className="slide">
        {images.map((img, idx) => (
          <S.SliderImg key={`img${idx}`} className="images" src={img} alt="none" />
        ))}
      </S.SliderWrap>
      <S.ArrowL onClick={moveLeft}>
        <MdKeyboardArrowLeft size={40} />
      </S.ArrowL>
      <S.ArrowR onClick={moveRight}>
        <MdKeyboardArrowRight size={40} />
      </S.ArrowR>
      <S.PageNum>
        {cur + 1} / {maxSlide}
      </S.PageNum>
    </S.Container>
  );
}
