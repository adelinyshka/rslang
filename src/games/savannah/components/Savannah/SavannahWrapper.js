import styled from 'styled-components';

const SavannahWrapper = styled.div`
  font-family: 'Exo',sans-serif;
  font-size: 25px;
  position: relative;
  height: 100vh;
  margin-left: 50px;
  position: relative;
  color: white;
  background: -o-linear-gradient(218.82deg, #9FAF92 -0.81%, #037264 96.43%);
  background: linear-gradient(231.18deg, #9FAF92 -0.81%, #037264 96.43%);
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
  }
  
  img.cross {
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 17px;
    transform: scale(0.5);
    width: 50px;
    height: 50px;
    
    &:hover {
      cursor: pointer;
    }
  }
  
  .falling_word {
    text-align: center;
    padding-top: 100px;
  }
  .listWords {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 30%;
    list-style-type: none;
    width: 80%;
    margin: 0 auto;
    
    & li {
    margin: 20px;
    }
  }
  
  img.crystall {
    display: block;
    position: absolute;
    bottom: 10%;
    left: calc(50% - 96px/2);
  }
`;

export default SavannahWrapper;
