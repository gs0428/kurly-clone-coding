import { PiList } from "react-icons/pi";
import * as S from "../../../styles/header/bot";
import { useEffect, useState } from "react";

export default function Bot({ ctgs }) {
  const [ctg, setCtg] = useState();
  const [ctgWrap, setCtgWrap] = useState();

  useEffect(() => {
    setCtg(document.querySelector("#ctg"));
    setCtgWrap(document.querySelector("#ctgWrap"));
  }, []);
  if (ctg !== undefined && ctgWrap !== undefined) {
    ctg.addEventListener("mouseover", () => {
      ctgWrap.style.display = "block";
    });
    ctg.addEventListener("mouseout", () => {
      ctgWrap.style.display = "none";
    });
    ctgWrap.addEventListener("mouseover", () => {
      ctgWrap.style.display = "block";
    });
    ctgWrap.addEventListener("mouseout", () => {
      ctgWrap.style.display = "none";
    });
  }
  const lists = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];

  const CtgList = ({ nonHover, hover, name }) => {
    const [container, setContainer] = useState();
    const [img, setImg] = useState();
    const [ctgName, setCtgName] = useState();
    useEffect(() => {
      setContainer(document.querySelector(`#${name}container`));
      setImg(document.querySelector(`#${name}img`));
      setCtgName(document.querySelector(`#${name}ctg`));
    }, []);
    if (img !== undefined && container !== undefined && name !== undefined) {
      container.addEventListener("mouseover", () => {
        img.src = hover;
        ctgName.style.color = "#5f0080";
      });
      container.addEventListener("mouseout", () => {
        img.src = nonHover;
        ctgName.style.color = "#333";
      });
    }
    return (
      <S.Ctg id={`${name}container`}>
        <S.CtgImg src={nonHover} alt="none" id={`${name}img`} />
        <S.CtgName id={`${name}ctg`}>{name}</S.CtgName>
      </S.Ctg>
    );
  };
  return (
    <S.Container>
      <S.CtgContainer id="ctg">
        <PiList size={20} />
        <S.CtgList>카테고리</S.CtgList>
        <S.CtgWrap id="ctgWrap">
          {ctgs.map((ctg, idx) => (
            <CtgList key={`${ctg[1]}${idx}`} nonHover={ctg[0]} hover={ctg[1]} name={ctg[2]} />
          ))}
        </S.CtgWrap>
      </S.CtgContainer>
      <S.ListWrap>
        {lists.map((list, idx) => (
          <S.List key={`list${idx}`}>{list}</S.List>
        ))}
      </S.ListWrap>
      <S.NoticeWrap>
        <S.HighlightColor>샛별・택배</S.HighlightColor> 배송안내
      </S.NoticeWrap>
    </S.Container>
  );
}
