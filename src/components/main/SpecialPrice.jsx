import * as C from "../../styles/common.style";
import * as S from "../../styles/main/specialPrice";
import { TbMessage2 } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { useRef, useState } from "react";

const HOUR = 1000 * 3600 * 24;
const MINUTE = 1000 * 60;
const SECOND = 1000;

export default function SpecialPrice() {
  const [hour, setHour] = useState(23);
  const [minute, setMinute] = useState(59);
  const [second, setSecond] = useState(59);
  const start = useRef(false);

  if (!start.current) {
    setInterval(() => {
      setSecond((n) => (n === 0 ? 59 : n - 1));
      start.current = true;
    }, SECOND);
    setInterval(() => {
      setMinute((n) => (n === 0 ? 59 : n - 1));
    }, MINUTE);
    setInterval(() => {
      setHour((n) => (n === 0 ? 23 : n - 1));
    }, HOUR);
  }

  const products = [
    [
      "특별할인",
      "https://product-image.kurly.com/product/image/531c8270-058e-4be3-aecf-6942816df709.jpg",
      "1등급 이상 한우 차돌박이 구이용 200g (냉동)",
      "41%",
      "11,160원",
      "19,200원",
      "999+",
    ],
    [
      "특별할인",
      "https://product-image.kurly.com/product/image/858089c2-c98f-4cbe-9f55-e28097a3bac2.jpg",
      "[풀무원다논] 그릭요거트 400g 2종(택1)",
      "30%",
      "2,786원",
      "3,980원",
      "9,999+",
    ],
    [
      "특별할인",
      "https://product-image.kurly.com/product/image/6af4ccee-4c8c-4692-9e0b-63ebe47cc227.jpg",
      "[지오마] 프리미엄 바디스크럽 600g 4종(택1)",
      "60%",
      "14,900원",
      "38,000원",
      "525",
    ],
  ];

  return (
    <S.Container>
      <C.ProductContainer>
        <S.Wrap>
          특별 할인
          <S.SubContent>24시간 한정 특가!</S.SubContent>
          <S.Timer>
            <S.Clock>
              <S.HourStick />
              <S.Pin />
              <S.MinuteStick id="minuteStick" />
            </S.Clock>
            <S.TimeTicking>
              {Math.floor(hour / 10) === 0 ? "0" + hour : hour}:{Math.floor(minute / 10) === 0 ? "0" + minute : minute}:
              {Math.floor(second / 10) === 0 ? "0" + second : second}
            </S.TimeTicking>
          </S.Timer>
          <S.Additional>망설이면 늦어요!</S.Additional>
        </S.Wrap>
        {products.map((product, idx) => (
          <C.ProductWrap key={`productwrap${idx}`} className="sale-product">
            <C.Coupon key={`coupon${idx}`} content={product[0]}>
              {product[0]}
            </C.Coupon>
            <C.ImgWrap key={`imgwrp${idx}`}>
              <C.Img src={product[1]} alt="none" />
            </C.ImgWrap>
            <C.Cart>
              <C.CartWrap>
                <PiShoppingCartLight size={20} />
              </C.CartWrap>
              담기
            </C.Cart>
            <C.Product key={`product${idx}`}>{product[2]}</C.Product>
            <C.NonDiscount key={`nondiscount${idx}`}>{product[5]}</C.NonDiscount>
            <C.PriceWrap key={`pricewrap${idx}`}>
              <C.Discount key={`discount${idx}`}>{product[3]}</C.Discount>
              {product[4]}
            </C.PriceWrap>
            <C.ReviewWrap key={`reviewwrap${idx}`}>
              <TbMessage2 key={`reviewicon${idx}`} size={15} />
              <C.Review key={`review${idx}`}>{product[6]}</C.Review>
            </C.ReviewWrap>
          </C.ProductWrap>
        ))}
      </C.ProductContainer>
    </S.Container>
  );
}
