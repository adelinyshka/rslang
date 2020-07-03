import styled from 'styled-components';

const PromoWrapper = styled.div`
  background: #fafafa;
  scroll-behavior: smooth;
  
  img.main_page_img {
  width: 580px;
  margin-top: 100px;
  display: inline-block;
  padding: 16px;
  margin-left: -110px;
  
  @media (max-width: 990px)  {
    margin: -20px auto 0;
    display: flex;
    background-size: contain;
    width: 60%;
    padding: 16px;
    }
  }
  
  .huge_title {
    color: #4B5D68;
    max-width: 560px;
    padding: 16px;
    font: bold 80px/110% 'Exo',sans-serif;
  
  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    font-size: 60px;
    text-align: center;
    }
  
  @media (max-width: 570px) {
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    }
  }
  
  .main_page_text {
    color: #4B5D68;
    max-width: 420px;
    padding: 20px 16px;
    font: normal 18px/170% 'Exo',sans-serif;
    display: inline-block;
  
  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    font-size: 16px;
    text-align: left;
  }
  
  @media (max-width: 570px) {
    font-size: 16px;
    display:flex;
    text-align: center;
    max-width: none;
    }
  }
  
  .promo_bg {
    height: 100%;
    font-family: Exo, sans-serif;
    margin: 0 auto;
    max-width: 1200px;
    scroll-behavior: smooth;
  }
  
  .promo_alignment {
    display: flex;
    justify-content: space-between;
    
  @media (max-width: 990px) {
    display: block;
    }
  }

  .top_pad {
    padding-top: 40px;
  }
  
  .wrapper_game {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  h2.promo_title_mid {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;
    text-align: center;
    color: #4B5D68;
    padding: 50px 0;
  
  @media (max-width: 990px) and (min-width: 571px) {
    font-size: 30px;
    padding: 30px 0;
  }
  
  @media (max-width: 570px) {
    font-size: 22px;
    padding: 16px;
    }
  }
  
  .text_after_title {
    font-family: 'Exo',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #4B5D68;
    padding: 20px 30%;

  @media (max-width: 990px) and (min-width: 571px) {
    padding: 10px 20%;
  }
  
  @media (max-width: 570px) {
    padding: 10px 10%;
    }
  }
  
  img.full_width {
    width: 70%;
    display: flex;
    margin: 0 auto;
    padding: 16px;
    background-size: contain;
  
  @media (max-width: 990px) and (min-width: 571px)  {
    width: 80%;
  }
  
  @media (max-width: 570px)  {
    width: 100%;
    }
  }
`;

export default PromoWrapper;
