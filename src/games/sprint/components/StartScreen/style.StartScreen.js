import styled from 'styled-components';

export default styled.div`
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.gameName{
  display:flex;
  color: #6979F8;
  font: normal 50px 'Exo',sans-serif;

}
.start_btn {
  background: #0AD1BD;
  border: #0AD1BD;
  color: white;
  width: 178px;
  height: 48px;
  margin: 26px 0 7px 0;
}

.start_btn:hover,
.start_btn:focus,
.start_btn:active {
  background: #08A999;
  border: #08A999;
}

.imgCantainer{
width: 80%;
display: flex;
justify-content: space-between;
}

.text p{
  margin: 45px 0 26px 0;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #000000;
}
`;
