import { styled } from "styled-components";

export const ArrowR = styled.div`
  position: absolute;
  margin-left: 1250px;
  width: 52px;
  height: 52px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  opacity: 0;
  cursor: pointer;
`;
export const ArrowL = styled.div`
  position: absolute;
  margin-right: 1250px;
  width: 52px;
  height: 52px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  opacity: 0;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    ${ArrowR}, ${ArrowL} {
      opacity: 1;
    }
  }
`;

export const SliderWrap = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 1900px;
`;

export const SliderImg = styled.img`
  position: relative;
  left: 0px;
  transition: left 0.3s;
`;

export const PageNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  margin: 300px 0px 0px 780px;
  width: 55px;
  height: 23px;
  font-size: 14px;
  border-radius: 12px;
  color: rgb(255, 255, 255);
`;
