import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 0px 33px;
`;

export const ContentWrap = styled.div`
  color: rgb(153, 153, 153);
  line-height: 14.5px;
  font-size: 10px;
  display: flex;
`;

export const Icon = styled.img`
  margin-right: 10px;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  cursor: pointer;
`;

export const Content = styled.div`
  cursor: pointer;
  width: 210px;
`;
