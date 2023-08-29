import { styled } from "styled-components";

export const FlexWrap = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 1050px;
  overflow-x: hidden;
  padding-left: 10px;
`;

export const ProductWrap = styled.div`
  margin-right: 18px;
  position: relative;
  cursor: pointer;
  right: 0px;
  transition: right 0.3s;
`;

export const Coupon = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgb(189, 118, 255);
  color: white;
  height: 32px;
  padding: 0px 8px;
  align-items: center;
  display: ${(props) => (!props.content ? "none" : "flex")};
  border-radius: 4px;
  top: 8px;
  left: 8px;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  border-radius: 4px;
`;

export const Img = styled.img`
  width: 249px;
  height: 320px;
  transform: scale(1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.025);
  }
`;

export const CartWrap = styled.div`
  margin-right: 4px;
`;

export const Cart = styled.button`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(221, 221, 221);
  height: 36px;
  margin-top: 6px;
  cursor: pointer;
`;

export const Product = styled.div`
  font-weight: 400;
  margin: 14px 0px 8px 0px;
`;

export const PriceWrap = styled.div`
  font-weight: 800;
  margin-bottom: 8px;
`;

export const Discount = styled.span`
  color: rgb(250, 98, 47);
  margin-right: 7px;
`;

export const NonDiscount = styled.div`
  color: rgb(181, 181, 181);
  text-decoration-line: line-through;
  font-size: 14px;
  font-weight: 400;
`;

export const ReviewWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgb(153, 153, 153);
`;

export const Review = styled.span`
  margin-left: 2px;
`;
