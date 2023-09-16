import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 440px;
  border-radius: 12px;
  background-color: #ffffff;
  padding: 30px;
`;

export const Title = styled.div`
  fontsize: 14px;
  margin-top: 12px;
`;

export const ExcludeEarnPoints = styled.div`
  font-size: 12px;
  margin: 2px 0px 6px 0px;
  color: rgb(102, 102, 102);
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountButtonWrap = styled.div`
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(221, 223, 225);
  border-radius: 3px;
  align-items: center;
`;

export const CountButton = styled.button`
  border-width: 0px;
  background-color: #ffffff;
  height: 100%;
  cursor: pointer;
`;

export const TotalPriceWrap = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

export const TotalPrice = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const Guide = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 6px;
  font-size: 14px;
  align-items: center;
`;

export const EarnPoints = styled.div`
  background-color: rgb(255, 191, 0);
  border-radius: 9px;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  margin-right: 6px;
  width: 38px;
  padding: 4px 0px;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  width: 50%;
  font-size: 16px;
  margin: 0px 4px;
  height: 52px;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #ffffff;
  cursor: pointer;
`;

export const AddProductButton = styled(CancelButton)`
  background-color: rgb(95, 0, 128);
  color: #ffffff;
`;
