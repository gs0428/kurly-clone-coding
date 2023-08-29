import * as S from "../../../styles/header/top";
import { BiSolidDownArrow } from "react-icons/bi";

export default function Top() {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse", height: "35px", alignItems: "center" }}>
      <BiSolidDownArrow size={10} />
      <S.Options color="#333">고객센터</S.Options>
      <S.Div>|</S.Div>
      <S.Options color="#333">로그인</S.Options>
      <S.Div>|</S.Div>
      <S.Options color="rgb(95, 0, 128)">회원가입</S.Options>
    </div>
  );
}
