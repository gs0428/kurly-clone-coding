import { TbMessage2 } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as S from "../../styles/main/products.style";
import { useEffect, useState } from "react";

export default function Products({ product }) {
  const products = product;
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
      <S.Title>이 상품 어때요?</S.Title>
      <S.ArrowL cur={cur} onClick={moveLeft}>
        <MdKeyboardArrowLeft size={40} />
      </S.ArrowL>
      <S.ArrowR cur={cur} onClick={moveRight}>
        <MdKeyboardArrowRight size={40} />
      </S.ArrowR>
      <S.ProductContainer>
        {products.map((product, idx) => (
          <S.ProductWrap key={`productwrap${idx}`} className="product">
            <S.Coupon key={`coupon${idx}`} content={product[0]}>
              {product[0]}
            </S.Coupon>
            <S.ImgWrap key={`imgwrp${idx}`}>
              <S.Img src={product[1]} alt="none" />
              <S.Cart
                key={`cart${idx}`}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="none"
              />
            </S.ImgWrap>
            <S.Product key={`product${idx}`}>{product[2]}</S.Product>
            <S.PriceWrap key={`pricewrap${idx}`}>
              <S.Discount key={`discount${idx}`}>{product[3]}</S.Discount>
              {product[4]}
            </S.PriceWrap>
            <S.NonDiscount key={`nondiscount${idx}`}>{product[5]}</S.NonDiscount>
            <S.ReviewWrap key={`reviewwrap${idx}`}>
              <TbMessage2 key={`reviewicon${idx}`} size={15} />
              <S.Review key={`review${idx}`}>{product[6]}</S.Review>
            </S.ReviewWrap>
          </S.ProductWrap>
        ))}
      </S.ProductContainer>
    </S.Container>
  );
}
