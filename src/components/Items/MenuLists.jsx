import React from 'react';
import styled from 'styled-components';
import RouterConfig from '../../utils/RouterConfig';
import MenuItem from '../Atom/MenuItem';

const StyledMenuLists = styled.ul`
  list-style-type: none;
`;

export default function MenuLists() {
  const Lists = RouterConfig.map((item) => (
    <li key={item.key}>
      <MenuItem
        hasChild={!!item.children}
        title={item.title}
        path={item.path || ''}
      />
    </li>
  ));

  return (
    <StyledMenuLists>
      {Lists}
    </StyledMenuLists>
  );
}
