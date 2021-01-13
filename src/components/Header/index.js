/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

function HeaderComponent() {
  return (
    <Nav>
      <a>
        <FaHome size={24} />
      </a>
      <a>
        <FaUserAlt size={24} />
      </a>
      <a>
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}

export default HeaderComponent;
