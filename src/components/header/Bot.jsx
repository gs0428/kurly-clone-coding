import { PiList } from "react-icons/pi";
import * as S from "../../styles/header/bot";

export default function Bot() {
  const lists = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
  const ctg = [
    ["https://collection-image.kurly.com/site-category-groups/1/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png", "채소"],
    ["https://collection-image.kurly.com/site-category-groups/2/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png", "과일・견과・쌀"],
    ["https://collection-image.kurly.com/site-category-groups/3/ZDTiP71KkstnCGkPmu67wHr0wcIo3QMLjyg2Kho3.png", "수산・해산・건어물"],
    ["https://collection-image.kurly.com/site-category-groups/4/EOMHR0scDTojmp9yxY6ZK6U01fkqUEg19nPMyQFG.png", "정육・계란"],
    ["https://collection-image.kurly.com/site-category-groups/5/CkyoRnUe2q9ngIOLW3bJPRYBw9xq9BHZ3fNQIq1c.png", "국・반찬・메인요리"],
    ["https://collection-image.kurly.com/site-category-groups/6/LZjcLmIFN6IqVsraCsArIE2zPh3u2i7foirsWHQZ.png", "샐러드・간편식"],
    ["https://collection-image.kurly.com/site-category-groups/7/u9ClAhIMBYYrC3U9b3dvn9MEzqGPpL48E5fLldNv.png", "면・양념・오일"],
    ["https://collection-image.kurly.com/site-category-groups/8/PsTvzGzTKzgmANHetZ1XDCBoIvHj874L9goGSKXx.png", "생수・음료・우유・커피"],
    ["https://collection-image.kurly.com/site-category-groups/9/NQcAF49piGDLu6VFgONSsIHWF1xU01o95Azs7usZ.png", "간식・과자・떡"],
    ["https://collection-image.kurly.com/site-category-groups/10/H4Ivs7jCWSuhqh7ru3NetkS6Hhof7pvq3tWbujBr.png", "베이커리・치즈・델리"],
    ["https://collection-image.kurly.com/site-category-groups/11/vEGBXqN7a2bxTC3v6jntEzTqQiwG4ogLkiruPwRs.png", "건강식품"],
    ["https://collection-image.kurly.com/site-category-groups/12/xtK9aF5n9OfmNfWuLMmyHzxUaj7Y9pVx2MPetIex.png", "와인・위스키"],
    ["https://collection-image.kurly.com/site-category-groups/13/AOjtb13dmWVXuWVXD3ciXj86bREiwbuZe7UMuORT.png", "전통주"],
    ["https://collection-image.kurly.com/site-category-groups/14/1vTroAoaidyGvcDf1MRU8GhS73GMp9oZ7lm7IT0Z.png", "생활용품・리빙・캠핑"],
    ["https://collection-image.kurly.com/site-category-groups/15/o2JUnyHF7RfALd4PF2hDWMeXsLwks8V0eOZxkKTz.png", "스킨케어・메이크업"],
    ["https://collection-image.kurly.com/site-category-groups/16/iX5PzA1SIZQ5HtuzlxIHxwoEghZJPo52RjKTbkLe.png", "헤어・바디・구강"],
    ["https://collection-image.kurly.com/site-category-groups/17/mMvcBMHney2BoKcBu3rguBpJJ74I6B3vMd25WExM.png", "주방용품"],
    ["https://collection-image.kurly.com/site-category-groups/18/AnLa9VI6lup6UFVkzjgoTZPPbDWDWRLKhbf3LN22.png", "가전제품"],
    ["https://collection-image.kurly.com/site-category-groups/19/V2MuWvX3LZ2COZf1Mmf50sTvvPzvxdrgp3blMCjI.png", "반려동물"],
    ["https://collection-image.kurly.com/site-category-groups/20/PPIhbxPYNSs9WkXDw4gEmet6A0biLQi2rYebJ7xw.png", "베이비・키즈・완구"],
  ];
  return (
    <S.Container>
      <S.CtgWrap>
        <PiList size={20} />
        <S.Ctg>카테고리</S.Ctg>
      </S.CtgWrap>
      <div style={{ position: "absolute", margin: "76px 0px 0px 5px", zIndex: "2", border: "1px solid black", width: "250px" }}>
        <div>스킨케어</div>
      </div>
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
