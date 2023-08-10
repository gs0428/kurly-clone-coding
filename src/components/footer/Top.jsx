import * as S from "../../styles/footer/top";
import * as C from "../../styles/common.style";

const requests = [
  ["카카오톡 문의", ["월~토요일 | 오전 7시 - 오후 6시", "일/공휴일 | 오전 7시 - 오후 1시"]],
  ["1:1 문의", ["365일", "고객센터 운영시간에 순차적으로 답변드리겠습니다."]],
  ["대량주문 문의", ["월~금요일 | 오전 9시 - 오후 6시", "점심시간 | 낮 12시 - 오후 1시"]],
];

const contents = ["컬리소개", "컬리소개영상", "투자정보", "인재채용", "이용약관", "개인정보처리방침", "이용안내"];

export default function Top() {
  const Request = ({ request }) => {
    return (
      <S.RequestWrap>
        <S.Request>{request[0]}</S.Request>
        <div>
          <S.RequestContent>{request[1][0]}</S.RequestContent>
          <S.RequestContent>{request[1][1]}</S.RequestContent>
        </div>
      </S.RequestWrap>
    );
  };
  return (
    <>
      <C.FlexWrap>
        <S.DivLine />
        <S.DivWrap>
          <S.CallCenter>고객행복센터</S.CallCenter>
          <S.InfoWrap>
            <S.CallNum>1644-1107 </S.CallNum>
            월~토요일 오전 7시 - 오후 6시
          </S.InfoWrap>
          {requests.map((request, idx) => (
            <Request key={`request${idx}`} request={request} />
          ))}
          <S.NonMember>비회원 문의 : help@kurlycorp.com</S.NonMember>
        </S.DivWrap>
        <S.DivWrap>
          <S.ContentsWrap>
            {contents.map((content, idx) => (
              <span key={`contents${idx}`}>{content}</span>
            ))}
          </S.ContentsWrap>
          <S.ExInfoWrap>
            법인명(상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 <S.HighlightText>사업자정보 확인</S.HighlightText>
          </S.ExInfoWrap>
          <S.ExInfoWrap>통신판매업 : 제 2018-서울강남-01646 호</S.ExInfoWrap>
          <S.ExInfoWrap>주소 : 서울특별시 강남구 테헤란로 133,18층(역삼동) | 대표이사 : 김슬아</S.ExInfoWrap>
          <S.ExInfoWrap>
            채용문의 : <S.HighlightText>recruit@kurlycorp.com</S.HighlightText>
          </S.ExInfoWrap>
          <S.ExInfoWrap>팩스 : 070 - 7500 - 6098</S.ExInfoWrap>
          <S.IconWrap>
            <S.Icon src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="instagram" />
            <S.Icon src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="facebook" />
            <S.Icon src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="naverblog" />
            <S.Icon src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="naverpost" />
            <S.Icon src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="youtube" />
          </S.IconWrap>
        </S.DivWrap>
      </C.FlexWrap>
      <S.EndLine />
    </>
  );
}
