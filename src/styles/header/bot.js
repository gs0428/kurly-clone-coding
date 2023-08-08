import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const Ctg = styled.span`
  position: relative;
  margin-left: 14px;
  top: 2px;
`;

export const ListWrap = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-evenly;
`;

export const NoticeWrap = styled.div`
  border: 1px solid rgb(238, 238, 238);
  padding: 6px 16px;
  border-radius: 18px;
  color: rgb(102, 102, 102);
  font-size: 13px;
`;

export const HighlightColor = styled.span`
  color: rgb(95, 0, 128);
`;
