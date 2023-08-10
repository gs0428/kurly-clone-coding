import * as S from "../../styles/footer/mid";

const datas = [
  [
    "https://res.kurly.com/pc/ico/2208/logo_isms.svg",
    ["[인증범위] 컬리 쇼핑몰 서비스 개발 ・ 운영", "(심사받지 않은 물리적 인프라 제외)", "[유효기간] 2022.01.19 ~ 2025.01.18"],
    34,
    34,
  ],
  ["https://res.kurly.com/pc/ico/2208/logo_privacy.svg", ["개인정보보호 우수 웹사이트 ・", "개인정보처리시스템 인증 (ePRIVACY PLUS)", ""], 34, 34],
  ["https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg", ["토스페이먼츠 구매안전(에스크로)", "서비스를 이용하실 수 있습니다.", ""], 102, 32],
  [
    "https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg",
    ["고객님이 현금으로 결제한 금액에 대해 우리은행과", "재무지급보증 계약을 체결하여 안전거래를 보강하고", "있습니다."],
    34,
    34,
  ],
];

const ExInfo = ({ data }) => {
  return (
    <S.ContentWrap>
      <S.Icon src={data[0]} alt="none" width={data[2]} height={data[3]} />
      <S.Content>
        {data[1].map((d, idx) => (
          <div key={`exinfocontent${idx}`}>{d}</div>
        ))}
      </S.Content>
    </S.ContentWrap>
  );
};

export default function Mid() {
  return (
    <S.Container>
      {datas.map((data, idx) => (
        <ExInfo key={`exinfo${idx}`} data={data} />
      ))}
    </S.Container>
  );
}
