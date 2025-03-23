import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 120px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);

  @media (min-width: 1024px) {
    padding: 160px 80px 120px;
  }
`;