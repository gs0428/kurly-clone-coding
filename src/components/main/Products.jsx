import { TbMessage2 } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as S from "../../styles/main/products.style";
import * as C from "../../styles/common.style";
import { useEffect, useState } from "react";

export default function Products({ product }) {
  const products = product;
  const location = window.location.pathname;
  const [prod, setProd] = useState();
  const [cur, setCur] = useState(0);
  const offset = [0, 1068, 2136];
  useEffect(() => {
    setProd(document.querySelectorAll(".product"));
  }, []);

  const moveLeft = () => {
    if (cur > 0) {
      setCur((n) => n - 1);
    }
  };
  const moveRight = () => {
    if (cur < 2) {
      setCur((n) => n + 1);
    }
  };
  if (prod !== undefined) {
    prod.forEach((i) => {
      i.style.right = `${offset[cur]}px`;
    });
  }

  return (
    <S.Container>
      <S.Title>{location === "/" ? "이 상품 어때요?" : "이주의 혜택✨"}</S.Title>
      <S.ArrowL cur={cur} onClick={moveLeft}>
        <MdKeyboardArrowLeft size={40} />
      </S.ArrowL>
      <S.ArrowR cur={cur} onClick={moveRight}>
        <MdKeyboardArrowRight size={40} />
      </S.ArrowR>
      <C.ProductContainer>
        {products.map((product, idx) => (
          <C.ProductWrap key={`productwrap${idx}`} className="product">
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
