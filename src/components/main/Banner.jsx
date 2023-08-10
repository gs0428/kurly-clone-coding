import { useEffect, useState } from "react";
import * as S from "../../styles/main/main.style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const images = [
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/96d0b3ea-f4a9-4541-b360-0ff12b43d262.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1f6fa1b5-4d8e-49dc-ae04-f3105ff7180b.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95fd22f9-07f4-4d58-a19c-44caaaaee608.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e02ac191-8935-4e27-9069-93e455322c6f.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/995dee1a-98db-4447-ab53-37ae5e407eef.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ca7f572e-2733-4c69-ae48-9c8f975e778b.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e688e39f-8a6d-442d-848b-731bb20e988f.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/aaa4e333-9b7c-4eb6-9e09-e1182446c797.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/65911d01-f24a-4ee8-b0c3-43699f244bc9.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f0aa8e01-a2f2-4e01-8aed-2906889b8d63.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b25d4c4b-eb0b-4a7f-8b30-b10ad0752dfa.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/3c6275ae-5e8a-457a-92cf-2f54c7d463a6.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b983c92d-0bec-472a-9b52-911f3fd9374f.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/37cb618f-179a-4497-b04a-1e3b72b47298.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9d2f846f-bd70-40f9-8d60-8004344f6ccc.png",
];

export default function Banner() {
  const [slideItems, setSlideItems] = useState();
  const [maxSlide, setMaxSlide] = useState(0);
  const [offset, setOffset] = useState(0);
  const [cur, setCur] = useState(1);

  useEffect(() => {
    setSlideItems(document.querySelectorAll(".images"));
    setMaxSlide(document.querySelectorAll(".images").length);
  }, []);

  const moveLeft = () => {
    if (cur > 1) {
      setCur((n) => n - 1);
      setOffset((n) => n - 1900);
    }
  };
  const moveRight = () => {
    if (cur < maxSlide) {
      setCur((n) => n + 1);
      setOffset((n) => n + 1900);
    }
  };

  if (slideItems !== undefined) {
    slideItems.forEach((i) => {
      i.style.left = `${-offset}px`;
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
        {cur} / {maxSlide}
      </S.PageNum>
    </S.Container>
  );
}

// styled-components 자식 요소에 클래스 부여하기
