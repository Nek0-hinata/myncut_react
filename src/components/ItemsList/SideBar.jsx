import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSideBar = styled.div`
      width: 250px;
      height: 100vh;
      float: left;
      background: rebeccapurple;
    `;

export default function SideBar(props) {
  const { leftList } = props;

  return (
    <StyledSideBar className="wrapper">
      {leftList.map((value) => value)}
    </StyledSideBar>
  );
}

SideBar.propTypes = {
  leftList: PropTypes.arrayOf(PropTypes.elementType),
};

SideBar.defaultProps = {
  leftList: [],
};
