import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledMenuItem = styled.div`
`;

export default function MenuItem(props) {
  const { title: { icon = '', text }, path, hasChild } = props;

  return (
    <StyledMenuItem hasChild={hasChild}>
      {icon}
      <Link to={path}>
        <span>{text}</span>
      </Link>
    </StyledMenuItem>
  );
}

MenuItem.propTypes = {
  title: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    text: PropTypes.string,
  }).isRequired,
  path: PropTypes.string.isRequired,
  hasChild: PropTypes.bool.isRequired,
};
