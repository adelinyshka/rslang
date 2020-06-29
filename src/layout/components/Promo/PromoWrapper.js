import styled from 'styled-components';

const PromoWrapper = styled.div`
  background: #fafafa;
  scroll-behavior: smooth;

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
`;

export default PromoWrapper;
