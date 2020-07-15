import styled from 'styled-components';

export default styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #003906 url('/assets/images/sprint/bg.svg') no-repeat;
background-position: 50% 100%;
background-size: contain;

.UpperContainer{
  width:100%;
  display:flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    width: 98%;
    max-width: 595px;
  }

  .TaimerContainer{
    display:flex;
    height:100px;
    width:100px;
    position: relative;
    left: 228px;
    top: 80px;
    margin-top: 3px;


    @media(max-width: 1274px) {
      left: 228px;
      top: 12px;
    }

    @media(max-width: 768px) {
      margin-left: 0px;
      position: static;
    }
}

  .ScoreContainer{
    display:flex;
    align-items: center;
    height:100px;
    width:100px;
    margin-left: 178px;

    @media(max-width: 768px) {
    margin-left: 77px;}

    .Score{
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 45px;
      line-height: 40px;
      text-align: center;
      color: #FFF;
    }
}

  .Toolbar{
    display:flex;
    height:100px;
    width:100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
      align-items: flex-end;
    }

    .Close{
      display:flex;

      @media(max-width: 768px) {
      display:none;
      }
    }
    .Notification_label{
      width: 35px;
      height: 35px;
      display: block;
      position: relative;
      margin:0;

      .Notification_input{
        display:none;
      }

      .Notification_input[type="checkbox"] + span {
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
        background: url('/assets/images/sprint/bell_on.svg') no-repeat;
        cursor: pointer;
      }

      .Notification_input[type="checkbox"]:checked + span {
        background: url('/assets/images/sprint/bell_off.svg') no-repeat;
      }

    }

    img{
      height:35px;
      width:35px
    }
  }
}

.Main{
  height:100vh;
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
}

.BlockWordContainer{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.BlockWord{
  display:flex;
  justify-content:center;
  align-items: start;
  flex-direction: column;
  width: 98%;
  height: 75%;
  max-width: 595px;
  max-height: 972px;
  background: rgba(10, 217, 198, 0.15);
  mix-blend-mode: normal;
  border-radius: 6px;
  margin-left: 100px;

  @media(max-width: 768px) {
    margin-left: 0px;
  }

  .Marks{
    height:100px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      height:35px;
      width:35px;
    }

    img:not(:first-child){
      margin-left:20px;
    }
  }

  .Targets{
    height:100px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      height:73px;
      width:73px;


      @media(max-width: 768px) {
        height:55px;
        width:55px;
      }
    }

    img:not(:first-child){
      margin-left:17px;
    }
  }

  .Words{
    height:110px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .EnWord {
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 22px;
      color: #FFFFFF;
    }

    .RuWord{
      font-family: 'Exo', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 22px;
      color: #FFFFFF;
      margin-top:9px;
    }
  }

  .Buttons{
    height:100px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
      flex-direction:column;
    }

    .Btn {
      background: #0AD1BD;
      border: #0AD1BD;
      width: 178px;
      height: 48px;
      margin: 26px 0 7px 0;
    }

    /* .Btn:hover,
    .Btn:focus,
    .Btn:active {
      background: #08A999;
      border: #08A999;
    } */

    .True{
      background-color: #0AD1BD;
      margin-left: 45px;

      @media(max-width: 768px) {
        margin-left: 0px;
    }
    }
    .False{
      background-color: #E10050;
    }

  }

  .Arrows{
    height:30px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
      display: none;
    }

    .Right{
      margin-left:186px;
    }

  }

  .PrononseContainer{
    height:30px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
`;
