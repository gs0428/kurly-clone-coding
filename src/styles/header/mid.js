import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
`;

export const Kurly = styled.div`
  font-size: 18px;
  color: ${(props) => (props.loc ? "#5f0080" : "rgb(181, 181, 181)")};
  margin-left: 11px;
  cursor: pointer;
  text-decoration: none;
`;

export const KurlyImg = styled.img`
  margin-right: 9px;
`;

export const KurlyWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const NImg = styled.img`
  position: relative;
  bottom: 7px;
  left: 3px;
`;

export const Div = styled.span`
  margin-left: 11px;
  color: rgb(217, 217, 217);
`;

export const InputWrap = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: row-reverse;
`;

export const Input = styled.input`
  width: 400px;
  height: 48px;
  font-size: 16px;
  padding-left: 14px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 6px;
  outline: none;
`;

export const Search = styled.div`
  position: absolute;
  margin: 10px;
  color: #5f0080;
  cursor: pointer;
`;

export const IconWrap = styled.div`
  cursor: pointer;
  margin-left: 20px;
  color: black;
  &:hover {
    color: #5f0080;
  }
`;
