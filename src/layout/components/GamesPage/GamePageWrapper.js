import styled from 'styled-components';

const GamePageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
  margin-left: 100px;
  
  @media (max-width: 768px) {
    margin-left: 0px;
    }
    
  @media (max-width: 485px) {
    margin-top: 50px;
    }
  }
  
  .game-title {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    color: #784AC1;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 150px 150px 150px;
    grid-template-areas: 
    "audiocall audiocall memory "
    "savannah center speakit"
    "sprint puzzle puzzle ";
    column-gap: 5px;
    row-gap: 5px;
    justify-items: center;
    align-items: center;
    justify-content: stretch; 
    align-content: stretch;
    background: #A7B0FB;
    margin-bottom: 20px;
    
    @media (max-width: 485px) {
      grid-template-columns: 150px 150px;
      grid-template-rows: 150px 150px 150px 150px;
      grid-template-areas: 
      "audiocall audiocall "
      "savannah speakit"
      "memory sprint"
      "puzzle puzzle";
    }
  }
  
  .audiocall,
  .memory,
  .savannah,
  .speakit,
  .sprint,
  .puzzle {
    justify-self: stretch;
    align-self: stretch;
    display: inline-grid;
    
    &:hover,
    &:focus,
    &:active {
      outline:none;
      text-decoration: none;
      filter: saturate(2);
    }
  }
  
  .center {
    grid-area: center;
    background: url('/assets/images/gamePage/center.png');
    justify-self: stretch;
    align-self: stretch;
    
    @media (max-width: 485px) {
      display: none;
    }
  }
  
  .audiocall {
    grid-area: audiocall;
    background: url('/assets/images/gamePage/audio.png');
  }
    
  .memory {
    background: url('/assets/images/gamePage/memory.png');
    grid-area: memory;
  }
  
  .savannah {
    background: url('/assets/images/gamePage/savannah.png');
    grid-area: savannah;
    }
  
  .speakit {
    background: url('/assets/images/gamePage/speakit.png');
    grid-area: speakit;
    }
  
  .sprint {
    background: url('/assets/images/gamePage/sprint.png');
    grid-area: sprint;
    }
  
  .puzzle {
    background: url('/assets/images/gamePage/puzzle.png');
    grid-area: puzzle;
    }
    
  .game-name {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
`;

export default GamePageWrapper;
