import React from 'react';
import styled from 'styled-components';

const StartPageWrapper = styled.div`
  background-color: #f6f6f6;
  font-family: 'Exo',sans-serif;
  position: relative;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
  }
`;

const Cross = styled.img`
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
`;

export default function Savannah() {
  return (
    <StartPageWrapper>
      <Cross
        src="./../assets/images/savannah/x.svg"
        alt="close"
      />
      <h1 style={{ textAlign: 'center' }}> hello </h1>
      <p style={{ width: '60%', margin: '0 auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
        aperiam aspernatur cum dicta earum ex fuga id impedit, inventore itaque
        molestias nemo, non odit quasi qui rem repellat similique suscipit
        tempore voluptate! Accusantium culpa dolorum eligendi et eveniet hic
        ipsum iste laboriosam laborum minus, molestiae nemo optio quibusdam
        reprehenderit veritatis.
      </p>
    </StartPageWrapper>
  );
}

