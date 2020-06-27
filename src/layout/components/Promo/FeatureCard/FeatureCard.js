import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureWrapper from './FeatureWrapper';

const FeatureCard = ({ src, title, text }) => (
  <FeatureWrapper>
    <img src={src} alt={title} />
    <h6>{title}</h6>
    <p>{text}</p>
  </FeatureWrapper>
);

FeatureCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;
