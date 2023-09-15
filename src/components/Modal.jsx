import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalInnerDataState, modalState } from "../recoil/modal";
import * as C from "../styles/common.style";
import { useState } from "react";

export default function Modal() {
  const { title, discountedPrice, originalPrice } = useRecoilValue(modalInnerDataState);
  const [count, setCount] = useState(1);
  const setModal = useSetRecoilState(modalState);
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "440px", borderRadius: "12px", backgroundColor: "white", padding: "30px" }}>
        <div style={{ fontSize: "14px", marginTop: "12px" }}>
          {title}
          <div style={{ fontSize: "12px", margin: "2px 0px 6px 0px", color: "rgb(102,102,102" }}>적립제외상품</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <C.PriceWrap>{discountedPrice}</C.PriceWrap>
            <C.NonDiscount>{originalPrice}</C.NonDiscount>
          </div>
          <div
            style={{
              width: "100px",
              height: "36px",
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid rgb(221, 223, 225)",
              borderRadius: "3px",
            }}
          >
            <button
              onClick={() => setCount((n) => (n === 1 ? 1 : n - 1))}
              style={{ borderWidth: "0px", backgroundColor: "white", height: "100%", cursor: "pointer" }}
            >
              <img
                src={
                  count === 1
                    ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo="
                    : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo="
                }
                alt="none"
              />
            </button>
            <span style={{ margin: "auto 0px" }}>{count}</span>
            <button onClick={() => setCount((n) => n + 1)} style={{ borderWidth: "0px", backgroundColor: "white", height: "100%", cursor: "pointer" }}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K"
                alt="none"
              />
            </button>
          </div>
        </div>
        <div style={{ marginTop: "36px", display: "flex", justifyContent: "space-between" }}>
          <div>합계</div>
          <div>{discountedPrice}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "6px" }}>
          <span>적립</span> 로그인 후, 적립 혜택 제공
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <button
            style={{
              width: "50%",
              fontSize: "16px",

              margin: "0px 4px",
              height: "52px",
              borderRadius: "3px",
              border: "1px solid rgb(221, 221, 221)",
              backgroundColor: "white",
            }}
            onClick={() => setModal(false)}
          >
            취소
          </button>
          <button
            style={{
              width: "50%",
              fontSize: "16px",

              margin: "0px 4px",
              height: "52px",
              borderRadius: "3px",
              border: "1px solid rgb(221, 221, 221)",
              backgroundColor: "rgb(95, 0, 128)",
              color: "white",
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}
