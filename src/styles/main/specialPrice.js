import { keyframes, styled } from "styled-components";

const clock = keyframes`
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(450deg);
  }
  100% {
    transform: rotate(450deg);
  }
`;

export const Container = styled.div`
  margin-top: 120px;
`;

export const Wrap = styled.div`
  width: 100%;
  font-size: 28px;
`;

export const SubContent = styled.div`
  color: rgb(153, 153, 153);
  font-weight: 400;
  font-size: 16px;
  margin-top: 11px;
`;

export const Timer = styled.div`
  margin: 24px 0px 32px 0px;
  font-size: 32px;
  display: flex;
  align-items: center;
`;

export const Clock = styled.div`
  width: 28px;
  height: 28px;
  background-color: rgb(189, 118, 255);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  margin: 6px;
`;

export const HourStick = styled.div`
  height: 8px;
  width: 2px;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  margin: 6px;
  border-radius: 1px 1px 0px 0px;
`;

export const Pin = styled.div`
  width: 2px;
  height: 2px;
  align-self: center;
  background-color: #ffffff;
  border-radius: 100%;
`;

export const MinuteStick = styled.div`
  height: 8px;
  width: 2px;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  margin: 6px;
  border-radius: 1px 1px 0px 0px;
  transform-origin: bottom center;
  transform: rotate(90deg);
  animation: ${clock} 2s 0s infinite;
`;

export const TimeTicking = styled.div`
  margin-top: 6px;
`;

export const Additional = styled.div`
  font-size: 14px;
  color: rgb(204, 204, 204);
`;
