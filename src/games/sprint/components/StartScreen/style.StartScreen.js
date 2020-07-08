import styled from 'styled-components';

export default styled.div`
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;

.GameName{
  display:flex;
  color: #6979F8;
  font: normal 50px 'Exo',sans-serif;

}

.Start_btn {
  background: #0AD1BD;
  border: #0AD1BD;
  color: white;
  width: 178px;
  height: 48px;
  margin: 26px 0 7px 0;
}

.Start_btn:hover,
.Start_btn:focus,
.Start_btn:active {
  background: #08A999;
  border: #08A999;
}

.ImgCantainer{
width: 80%;
display: flex;
justify-content: space-between;

img{
  display:flex;
height:80%;
width:80%;
max-width: 525px;
max-height: 340px;
}

.Text p{
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #000000;
}
}

`;
