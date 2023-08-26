import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
`;

export const CtgContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  &:hover {
    color: #5f0080;
  }
`;

export const CtgWrap = styled.div`
  position: absolute;
  margin: 76px 0px 0px 5px;
  z-index: 2;
  border: 1px solid black;
  width: 250px;
  top: 86px;
  border: 1px solid rgb(221, 221, 221);
  display: none;
`;

export const CtgList = styled.span`
  position: relative;
  margin-left: 14px;
  top: 2px;
`;

export const Ctg = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px 7px 14px;
  background-color: #ffffff;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const CtgImg = styled.img`
  width: 24px;
`;

export const CtgName = styled.div`
  margin-left: 10px;
  color: #333;
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
