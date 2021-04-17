import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: #f2f2f2;
`;

export const ContainerBlock = styled.div`
  width: 1260px;
  height: auto;
  margin: 0 auto;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

// ===== 헤더관련 =====

export const HeaderBlock = styled.div`
whdth: 100%;
height : 50px;
background : #FFFF66;
`;

export const GnbBlock = styled.div`
  width: 960px;
  height: 50px;
  margin: 0 auto;
  padding: 0 150px;
  position: relative;
`;

export const HeaderLogoBlock = styled.div`
img {
  width: 180px;
  float: left;
}
`;

export const MenuBlock = styled.div`
width: auto;
  float: right;
  button {
    width: auto;
    float: left;
    margin-bottom : 10px;
  }
`;

// ===== 푸터관련 =====

export const FooterBlock = styled.div`
  width: 100%;
  height: 100px;
  background: #FFFF66;
  bottom: 0;
`;

export const FooterBox = styled.div`
  width: 798px;
  height: auto;
  margin: 0 auto;
  padding: 30px 0 0 120px;

  .menu {
    width: 266px;
    height: 180px;
    float: left;
    .title_line {
      width: auto;
      height: 40px;
      padding-bottom: 10px;
    }
    .text_line {
      width: auto;
      height: 24px;
      padding-bottom: 10px;
    }
  }
`;