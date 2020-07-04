import style from 'styled-components';

export default style.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: white;


  ul {
    list-style: none;
  }

  li {
    background: red;
  }

  .learnedWord {
    background: green;
  }

  p {
    margin: 1% 0%;
  }

  img {
    filter: invert(1);
  }
`;
