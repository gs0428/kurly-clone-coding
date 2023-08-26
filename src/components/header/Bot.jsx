import { PiList } from "react-icons/pi";
import * as S from "../../styles/header/bot";
import { useEffect, useState } from "react";

export default function Bot() {
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
  const ctgs = [
    [
      "https://collection-image.kurly.com/site-category-groups/1/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png",
      "https://collection-image.kurly.com/site-category-groups/1/D2tq9D88GPQCRZd2FC04ct0BI0xId0Z1wTFWb7Wu.png",
      "채소",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/2/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png",
      "https://collection-image.kurly.com/site-category-groups/2/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png",
      "과일・견과・쌀",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/3/fivaoZPBTeqaDswJUgr3k0xMV0von36Qb9qnn7ZZ.png",
      "https://collection-image.kurly.com/site-category-groups/3/ZDTiP71KkstnCGkPmu67wHr0wcIo3QMLjyg2Kho3.png",
      "수산・해산・건어물",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/4/jj6zZg2sY94aytlc2k1udIAmWWvmUignR9VYaMcm.png",
      "https://collection-image.kurly.com/site-category-groups/4/EOMHR0scDTojmp9yxY6ZK6U01fkqUEg19nPMyQFG.png",
      "정육・계란",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/5/CkyoRnUe2q9ngIOLW3bJPRYBw9xq9BHZ3fNQIq1c.png",
      "https://collection-image.kurly.com/site-category-groups/5/TmOAqHrU3DaZ9GtkfircoZQmd0xGaplSNoXw2q8V.png",
      "국・반찬・메인요리",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/6/kwat5Szmq0ONTpMd4hlbcGmCOBd3FsMPyTzWxKBb.png",
      "https://collection-image.kurly.com/site-category-groups/6/LZjcLmIFN6IqVsraCsArIE2zPh3u2i7foirsWHQZ.png",
      "샐러드・간편식",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/7/CL0LpJynh8Nh2Vqmnm62RVTPePWVU84VkWwQPjdO.png",
      "https://collection-image.kurly.com/site-category-groups/7/u9ClAhIMBYYrC3U9b3dvn9MEzqGPpL48E5fLldNv.png",
      "면・양념・오일",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/8/bKllScRqF9gQ5q58LcmBfOOhgBrCOdVypPiRvQkL.png",
      "https://collection-image.kurly.com/site-category-groups/8/PsTvzGzTKzgmANHetZ1XDCBoIvHj874L9goGSKXx.png",
      "생수・음료・우유・커피",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/9/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png",
      "https://collection-image.kurly.com/site-category-groups/9/NQcAF49piGDLu6VFgONSsIHWF1xU01o95Azs7usZ.png",
      "간식・과자・떡",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/10/bIjVH9L4oDFYv0GpjBijA6QQEjiDOW0KoflLVNC1.png",
      "https://collection-image.kurly.com/site-category-groups/10/H4Ivs7jCWSuhqh7ru3NetkS6Hhof7pvq3tWbujBr.png",
      "베이커리・치즈・델리",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/11/vEGBXqN7a2bxTC3v6jntEzTqQiwG4ogLkiruPwRs.png",
      "https://collection-image.kurly.com/site-category-groups/11/MFavdtAkcl2J3q5fiyKDYKBtKiu0D28z9fLd1JhN.png",
      "건강식품",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/12/UnO3V0GDnss8p37EKmTGvnF9SzeyzgyzC0O7Wh1R.png",
      "https://collection-image.kurly.com/site-category-groups/12/xtK9aF5n9OfmNfWuLMmyHzxUaj7Y9pVx2MPetIex.png",
      "와인・위스키",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/13/1vmSDtWcIbzUc8QNl8CV9EQ7h5dWGc4uMg4uY6cP.png",
      "https://collection-image.kurly.com/site-category-groups/13/AOjtb13dmWVXuWVXD3ciXj86bREiwbuZe7UMuORT.png",
      "전통주",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/14/1vTroAoaidyGvcDf1MRU8GhS73GMp9oZ7lm7IT0Z.png",
      "https://collection-image.kurly.com/site-category-groups/14/Pswp08fDvUBYtFU4tOr0OPw96uvwEpfrHbLfQwhY.png",
      "생활용품・리빙・캠핑",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/15/3OUDPGzCOTPixqHY1wdFEUfHacXxynCpnlzFzFBD.png",
      "https://collection-image.kurly.com/site-category-groups/15/o2JUnyHF7RfALd4PF2hDWMeXsLwks8V0eOZxkKTz.png",
      "스킨케어・메이크업",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/16/APNr2Xb1ZeF9WcBDky1V9GWHZaCy7kifCkwSjTjy.png",
      "https://collection-image.kurly.com/site-category-groups/16/iX5PzA1SIZQ5HtuzlxIHxwoEghZJPo52RjKTbkLe.png",
      "헤어・바디・구강",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/17/K81cs1Af4uRkEvbnfEV51E5UcwP5v6HhH1xyFqHK.png",
      "https://collection-image.kurly.com/site-category-groups/17/mMvcBMHney2BoKcBu3rguBpJJ74I6B3vMd25WExM.png",
      "주방용품",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/18/Keg4gCKfZBXhAB0xMtsFyWq7PEowD7IiZNZSCTEY.png",
      "https://collection-image.kurly.com/site-category-groups/18/AnLa9VI6lup6UFVkzjgoTZPPbDWDWRLKhbf3LN22.png",
      "가전제품",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/19/DeT1R9JFqxgxubAIJuFcbZPPbBu8DHUkFJmGZBlJ.png",
      "https://collection-image.kurly.com/site-category-groups/19/V2MuWvX3LZ2COZf1Mmf50sTvvPzvxdrgp3blMCjI.png",
      "반려동물",
    ],
    [
      "https://collection-image.kurly.com/site-category-groups/20/0901lRbjcR35VHqUHPbKIZCAO9qPgi79RCqFymgp.png",
      "https://collection-image.kurly.com/site-category-groups/20/PPIhbxPYNSs9WkXDw4gEmet6A0biLQi2rYebJ7xw.png",
      "베이비・키즈・완구",
    ],
  ];
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
