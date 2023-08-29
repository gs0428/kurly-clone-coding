import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 40px 0px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 28px;
  margin-bottom: 27px;
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
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
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

export const Cart = styled.img`
  position: absolute;
  display: flex;
  align-self: self-end;
  margin: 15px;
`;

export const Product = styled.div`
  font-weight: 400;
  margin: 14px 0px 8px 0px;
`;

export const PriceWrap = styled.div`
  font-weight: 800;
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
  margin-bottom: 8px;
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

export const ArrowR = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  color: #5f0080;
  background-color: white;
  border-radius: 100%;
  display: ${(props) => (props.cur === 2 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 190px 0px 0px 1060px;
  z-index: 1;
`;
export const ArrowL = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  color: #5f0080;
  background-color: white;
  border-radius: 100%;
  display: ${(props) => (props.cur === 0 ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 190px 1050px 0px 10px;
  z-index: 1;
`;

export const StickyContainer = styled.div`
  width: 100vw;
  position: sticky;
  display: flex;
  top: 516px;
  flex-direction: row-reverse;
`;

export const StickyWrap = styled.div`
  margin-right: 20px;
  position: absolute;
`;

export const StickyImg = styled.img`
  height: 120px;
`;

export const StickyContent = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
