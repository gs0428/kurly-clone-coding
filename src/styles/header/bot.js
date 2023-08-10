import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
`;

export const CtgWrap = styled.div`
  cursor: pointer;
  display: flex;
  &:hover {
    color: #5f0080;
  }
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

export const List = styled.div`
  cursor: pointer;
  &:hover {
    color: #5f0080;
    text-decoration-line: underline;
    text-decoration-color: #5f0080;
  }
`;

export const NoticeWrap = styled.div`
  border: 1px solid rgb(238, 238, 238);
  padding: 6px 16px;
  border-radius: 18px;
  color: rgb(102, 102, 102);
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;

export const HighlightColor = styled.span`
  color: rgb(95, 0, 128);
`;
