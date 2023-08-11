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
  const [cur, setCur] = useState(0);
  const offset = [0, 1900, 3800, 5700, 7600, 9500, 11400, 13300, 15200, 17100, 19000, 20900, 22800, 24700, 26600, 28500];

  useEffect(() => {
    setSlideItems(document.querySelectorAll(".images"));
    setMaxSlide(document.querySelectorAll(".images").length);
  }, []);

  const moveLeft = () => {
    setCur((n) => (n - 1 === -1 ? 15 : n - 1));
  };
  const moveRight = () => {
    setCur((n) => (n + 1 === 16 ? 0 : n + 1));
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
<<<<<<< HEAD
=======

// styled-components 자식 요소에 클래스 부여하기

// import { useEffect, useState } from "react";
// import * as S from "../../styles/main/main.style";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const images = [
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/96d0b3ea-f4a9-4541-b360-0ff12b43d262.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1f6fa1b5-4d8e-49dc-ae04-f3105ff7180b.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95fd22f9-07f4-4d58-a19c-44caaaaee608.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e02ac191-8935-4e27-9069-93e455322c6f.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/995dee1a-98db-4447-ab53-37ae5e407eef.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ca7f572e-2733-4c69-ae48-9c8f975e778b.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e688e39f-8a6d-442d-848b-731bb20e988f.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/aaa4e333-9b7c-4eb6-9e09-e1182446c797.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/65911d01-f24a-4ee8-b0c3-43699f244bc9.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f0aa8e01-a2f2-4e01-8aed-2906889b8d63.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/f70905f4-7ef0-4b52-98a3-204c85a3d1ca.png",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b25d4c4b-eb0b-4a7f-8b30-b10ad0752dfa.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/3c6275ae-5e8a-457a-92cf-2f54c7d463a6.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b983c92d-0bec-472a-9b52-911f3fd9374f.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/37cb618f-179a-4497-b04a-1e3b72b47298.jpg",
//   "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9d2f846f-bd70-40f9-8d60-8004344f6ccc.png",
// ];

// export default function Banner() {
//   const [slideItems, setSlideItems] = useState();
//   const [maxSlide, setMaxSlide] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const [cur, setCur] = useState(0);
//   const [prev, setPrev] = useState(15);
//   const [next, setNext] = useState(1);
//   // let prev = 15;
//   // let cur = 0;
//   // let next = 1;
//   const [items, setItems] = useState([images[prev], images[cur], images[next]]);

//   // console.log("prev", prev);
//   // console.log("cur", cur);
//   // console.log("next", next);
//   useEffect(() => {
//     setSlideItems(document.querySelectorAll(".images"));
//     setMaxSlide(document.querySelectorAll(".images").length);
//   }, []);

//   const moveLeft = () => {
//     // if (cur > 1) {
//     setCur((n) => (n - 1 === -1 ? 15 : n - 1));
//     setPrev((n) => (n - 1 === -1 ? 15 : n - 1));
//     setNext((n) => (n - 1 === -1 ? 15 : n - 1));
//     setOffset((n) => n - 1900);
//     // prev = prev - 1 === -1 ? 15 : prev - 1;
//     // cur = cur - 1 === -1 ? 15 : cur - 1;
//     // next = next - 1 === -1 ? 15 : next - 1;
//     setItems([images[prev], images[cur], images[next]]);
//     // }
//   };
//   const moveRight = () => {
//     // if (cur < maxSlide) {
//     setCur((n) => (n + 1 === 16 ? 0 : n + 1));
//     setPrev((n) => (n + 1 === 16 ? 0 : n + 1));
//     setNext((n) => (n + 1 === 16 ? 0 : n + 1));
//     setOffset((n) => n + 1900);
//     // prev = prev + 1 === 16 ? 0 : prev + 1;
//     // cur = cur + 1 === 16 ? 0 : cur + 1;
//     // next = next + 1 === 16 ? 0 : next + 1;
//     setItems([images[prev], images[cur], images[next]]);
//     // }
//   };

//   if (slideItems !== undefined) {
//     slideItems.forEach((i) => {
//       console.log(i);
//       i.style.left = `${-offset}px`;
//     });
//   }

//   return (
//     <S.Container>
//       <S.SliderWrap className="slide">
//         {items.map((img, idx) => (
//           <S.SliderImg key={`img${idx}`} className="images" src={img} alt="none" />
//         ))}
//       </S.SliderWrap>
//       <S.ArrowL onClick={moveLeft}>
//         <MdKeyboardArrowLeft size={40} />
//       </S.ArrowL>
//       <S.ArrowR onClick={moveRight}>
//         <MdKeyboardArrowRight size={40} />
//       </S.ArrowR>
//       <S.PageNum>{cur + 1} / 16</S.PageNum>
//     </S.Container>
//   );
// }

// // styled-components 자식 요소에 클래스 부여하기
>>>>>>> master
