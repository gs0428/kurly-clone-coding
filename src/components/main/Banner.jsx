import { useEffect, useState } from "react";

const images = [
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/2f145724-c22f-4e28-ae91-d9f8d864f34d.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1f6fa1b5-4d8e-49dc-ae04-f3105ff7180b.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ca7f572e-2733-4c69-ae48-9c8f975e778b.jpg",
  "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/8919316b-b958-4a5c-b661-ce4def59fd3f.jpg",
];

export default function Banner() {
  const [slideItems, setSlideItems] = useState();
  const [maxSlide, setMaxSlide] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setSlideItems(document.querySelectorAll(".images"));
    setMaxSlide(document.querySelectorAll(".images").length);
  }, []);

  const [cur, setCur] = useState(1);
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
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div className="slide" style={{ display: "flex", flexWrap: "nowrap", overflowX: "hidden", position: "relative", width: "1900px" }}>
        {images.map((img, idx) => (
          <img
            key={`img${idx}`}
            className="images"
            src={img}
            alt="none"
            style={{ position: "relative", left: "0px", widows: "100%", flexShrink: "0", transition: "left 0.5s" }}
          />
        ))}
      </div>
      <div>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
      <h2>현재 페이지 : {cur}</h2>
    </div>
  );
}
