import React from 'react';
import { Link } from 'react-router-dom';
import SavannahWrapper from './SavannahWrapper';

export default function Savannah() {
  return (
    <SavannahWrapper>
      <Link to="">
        <img
          className="cross"
          src="./../assets/images/savannah/x_white.svg"
          alt="close"
        />
      </Link>
      <h3 className="falling_word"> word </h3>

      <ul className="listWords">
        <li>перевод1</li>
        <li>перевод2</li>
        <li>перевод3</li>
        <li>перевод4</li>
      </ul>

      <img
        className="crystall"
        src="./../assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
      />
    </SavannahWrapper>
  );
}
