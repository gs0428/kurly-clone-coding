export default function Header() {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse", height: "35px", alignItems: "center" }}>
      <span>고객센터</span>
      <span style={{ margin: "0px 12px 0px 12px" }}>|</span>
      <span>로그인</span>
      <span style={{ margin: "0px 12px 0px 12px" }}>|</span>
      <span>회원가입</span>
    </div>
  );
}
