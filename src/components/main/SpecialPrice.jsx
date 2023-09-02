import * as C from "../../styles/common.style";
import * as S from "../../styles/main/specialPrice";
import { TbMessage2 } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { addDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

export default function SpecialPrice() {
  const [hour, setHour] = useState(47);
  const [minute, setMinute] = useState(59);
  const [second, setSecond] = useState(59);
  useEffect(() => {
    setInterval(() => {
      document.querySelector("#minuteStick").style.animationDuration = "1s";
    }, 1000);
    setInterval(() => {
      document.querySelector("#minuteStick").style.animationDuration = "0s";
    }, 2000);
  }, []);
  const products = [
    [
      "전단특가",
      "https://img-cf.kurly.com/shop/data/goods/1650348343574l0.jpg",
      "[제스프리] 뉴질랜드 골드키위 1.1kg (7~10입)",
      "35%",
      "10,000원",
      "16,900원",
      "9,999+",
    ],
    ["전단특가", "https://img-cf.kurly.com/shop/data/goods/1648208560207l0.jpeg", "[애슐리] 오리지널 통살치킨", "25%", "5,920원", "7,900원", "9,999+"],
    [
      "전단특가",
      "https://product-image.kurly.com/product/image/3df368c8-e124-4d06-a9e9-af4c10d01b53.jpeg",
      "[압구정주꾸미] 주꾸미 볶음 300g",
      "25%",
      "6,675원",
      "8,900원",
      "999+",
    ],
  ];

  return (
    <S.Container>
      <C.ProductContainer>
        <S.Wrap>
          특별 할인
          <S.SubContent>48시간 한정 특가!</S.SubContent>
          <S.Timer>
            <S.Clock>
              <S.HourStick />
              <S.Pin />
              <S.MinuteStick id="minuteStick" />
            </S.Clock>
            <div>
              {hour}:{minute}:{second}
            </div>
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
