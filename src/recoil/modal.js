import { atom } from "recoil";

export const modalState = atom({
  key: "modal",
  default: false,
});

export const modalInnerDataState = atom({
  key: "modalInnerData",
  default: {
    title: "",
    discountedPrice: "",
    originalPrice: "",
  },
});
