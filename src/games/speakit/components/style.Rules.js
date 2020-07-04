import Style from 'styled-components';

export default Style.div`
position: fixed;
top: 0px;
left: 0px;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;

.window {
  width: 750px;
  height: 500px;
  background: #FFFFFF;
  border-radius: 12px;
  margin-left: 100px;
}

.text-section {
  height: 375px;
  background: #EEDFF2;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.text-section div{
  width: 75px;
  height: 75px;
  background: #6979F8;
  border: 10px solid white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-section p{
  width: 100%;
  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
}

.button-section {
  display: flex;
  height: 125px;
  justify-content: center;
  align-items: center;
}

button {
  border: 2px solid #6979F8;
  box-sizing: border-box;
  border-radius: 6px;
  background: #6979f8;
  height: 5vh;
  width: 15vw;
  font-size: 17px;
  outline: none;
}
`;
