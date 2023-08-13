import { TbMessage2 } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as S from "../../styles/main/products.style";
import { useEffect, useState } from "react";

const products = [
  [
    "",
    "https://product-image.kurly.com/product/image/81d1ae7d-67e2-464c-96f3-3129c67f4ef1.jpg",
    "[발린느] 카이막 100g",
    "8%",
    "9,980원",
    "10,900원",
    "후기 999+",
  ],
  [
    "",
    "https://product-image.kurly.com/product/image/afbccb35-a06d-4f9e-964f-d9bf3944e539.jpg",
    "[아티제] 바니 샌드쿠키 세트 (8개입)",
    "15%",
    "17,000원",
    "20,000원",
    "후기 31",
  ],
  [
    "",
    "https://img-cf.kurly.com/shop/data/goods/164821126465l0.jpeg",
    "[미트지엥] Flex 부채살 스테이크 밀키트 300g",
    "15%",
    "15,215원",
    "17,900원",
    "후기 999+",
  ],
  [
    "+20%쿠폰",
    "https://img-cf.kurly.com/shop/data/goods/1593750500355l0.jpg",
    "[법성포참맛] 대용량 영광굴비 1.4kg (20마리) (냉동)",
    "23%",
    "22,900원",
    "29,900원",
    "후기 999+",
  ],
  [
    "",
    "https://product-image.kurly.com/product/image/7719c48c-e057-4d56-91a8-f4b688cea28f.jpeg",
    "[태우한우] 1+ 한우 절단국거리용 200g (냉장) (1팩/2팩) (택1)",
    "",
    "15,900원",
    "",
    "후기 999+",
  ],
  [
    "",
    "https://img-cf.kurly.com/shop/data/goods/162874997923l0.jpg",
    "[선물세트] 겐츠베이커리 피스 케이크 9종 세트",
    "10%",
    "18,000원",
    "20,000원",
    "후기 999+",
  ],
  [
    "",
    "https://product-image.kurly.com/product/image/6969f9b7-49ad-46ec-9b36-9e0cfcf4499f.jpg",
    "[Kurly's] 동물복지 유정란 20구",
    "15%",
    "8,491원",
    "9,990원",
    "후기 999+",
  ],
  [
    "",
    "https://product-image.kurly.com/product/image/2233765d-0879-46ba-a7f2-a95b6e184a21.jpg",
    "[도산분식] 로제 떡볶이 세트",
    "15%",
    "7,565원",
    "8,900원",
    "후기 635",
  ],
  ["+20%쿠폰", "https://img-cf.kurly.com/shop/data/goods/1647494613179l0.jpg", "[피코크] 레드벨벳 컵케이크 (2개입)", "25%", "3,735원", "4,900원", "후기 301"],
  [
    "+10%쿠폰",
    "https://product-image.kurly.com/product/image/25fe989a-a432-4067-90f1-04e18ff4ea34.jpeg",
    "[자연실록] 무항생제 닭볶음탐용 800g",
    "10%",
    "7,110원",
    "7,900원",
    "후기 999+",
  ],
  [
    "",
    "https://img-cf.kurly.com/shop/data/goods/1647328041342l0.jpg",
    "[풀무원다논] 마시는 액티비아 플레인 (130mL X 8개)",
    "20%",
    "6,380원",
    "7,900원",
    "후기 999+",
  ],
  [
    "",
    "https://product-image.kurly.com/product/image/b7f308f7-381d-4084-b996-9a2762e5d45d.jpg",
    "[종가] 포기김치 2.3kg",
    "15%",
    "20,825원",
    "24,500원",
    "후기 999+",
  ],
];

export default function Products() {
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
