import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledShowList = styled.div`
      overflow: auto;
      height: 100vh;
      background: brown;
    `;

export default function ShowList(props) {
  const { children } = props;
  return (
    <StyledShowList className="wrapper">
      {children}
    </StyledShowList>
  );
}

ShowList.propTypes = {
  children: PropTypes.element.isRequired,
};
