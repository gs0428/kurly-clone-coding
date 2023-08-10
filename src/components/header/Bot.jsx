import { PiList } from "react-icons/pi";
import * as S from "../../styles/header/bot";
import * as C from "../../styles/common.style";

export default function Bot() {
  const lists = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
  return (
    <S.Container>
      <C.FlexWrap>
        <PiList size={20} />
        <S.Ctg>카테고리</S.Ctg>
      </C.FlexWrap>
      <S.ListWrap>
        {lists.map((list, idx) => (
          <div key={`list${idx}`}>{list}</div>
        ))}
      </S.ListWrap>
      <S.NoticeWrap>
        <S.HighlightColor>샛별・택배</S.HighlightColor> 배송안내
      </S.NoticeWrap>
    </S.Container>
  );
}
