import * as S from "../../styles/main/bigSale.style";
import * as C from "../../styles/common.style";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";

export default function BigSale() {
  const products = [
    [
      "",
      "https://product-image.kurly.com/product/image/13d061a1-df1f-4e36-a676-03f687036cb1.jpeg",
      "춘천 국물 닭갈비 떡볶이",
      "20%",
      "10,000원",
      "12,500원",
      "9,999+",
    ],
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
      <S.Title>
        🔥썸머 빅세일 마지막 3일!
        <MdKeyboardArrowRight size={32} />
      </S.Title>
      <S.SubTitle>다시 없을 특가 찬스를 놓치지 마세요</S.SubTitle>
      <C.ProductContainer>
        {products.map((product, idx) => (
          <C.ProductWrap key={`productwrap${idx}`} className="product">
            <C.Coupon key={`coupon${idx}`} content={product[0]}>
              {product[0]}
            </C.Coupon>
            <C.ImgWrap key={`imgwrp${idx}`}>
              <C.Img src={product[1]} alt="none" />
              <C.Cart
                key={`cart${idx}`}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="none"
              />
            </C.ImgWrap>
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
