import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalInnerDataState, modalState } from "../recoil/modal";
import * as C from "../styles/common.style";
import * as S from "../styles/main/modal.style";
import { useRef, useState } from "react";

export default function Modal() {
  const { title, discountedPrice, originalPrice } = useRecoilValue(modalInnerDataState);
  const count = useRef(1);
  const [totalPrice, setTotalPrice] = useState(discountedPrice);
  const setModal = useSetRecoilState(modalState);

  const calculate = () => {
    const stringToNumber = Number(discountedPrice.replace(/,/g, "").replace(/원/, ""));
    setTotalPrice((count.current * stringToNumber).toLocaleString() + "원");
  };

  const deleteProduct = () => {
    count.current = count.current === 1 ? 1 : count.current - 1;
    calculate();
  };

  const plusProduct = () => {
    count.current += 1;
    calculate();
  };
  return (
    <S.Background>
      <S.Container>
        <S.Title>
          {title}
          <S.ExcludeEarnPoints>적립제외상품</S.ExcludeEarnPoints>
        </S.Title>
        <S.PriceContainer>
          <C.FlexWrap>
            <C.PriceWrap>{discountedPrice}</C.PriceWrap>
            <C.NonDiscount>{originalPrice}</C.NonDiscount>
          </C.FlexWrap>
          <S.CountButtonWrap>
            <S.CountButton onClick={deleteProduct}>
              <img
                src={
                  count.current === 1
                    ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo="
                    : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo="
                }
                alt="none"
              />
            </S.CountButton>
            {count.current}
            <S.CountButton onClick={plusProduct}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K"
                alt="none"
              />
            </S.CountButton>
          </S.CountButtonWrap>
        </S.PriceContainer>
        <S.TotalPriceWrap>
          합계
          <S.TotalPrice>{totalPrice}</S.TotalPrice>
        </S.TotalPriceWrap>
        <S.Guide>
          <S.EarnPoints>적립</S.EarnPoints>
          로그인 후, 적립 혜택 제공
        </S.Guide>
        <S.ButtonWrap>
          <S.CancelButton onClick={() => setModal(false)}>취소</S.CancelButton>
          <S.AddProductButton>장바구니 담기</S.AddProductButton>
        </S.ButtonWrap>
      </S.Container>
    </S.Background>
  );
}
