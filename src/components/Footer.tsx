import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: var(--white);
  padding: 64px 24px 32px;
  border-top: 1px solid var(--border-color);

  @media (min-width: 1024px) {
    padding: 80px 80px 40px;
  }
`;