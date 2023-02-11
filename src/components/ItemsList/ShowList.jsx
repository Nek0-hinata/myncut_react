import React from 'react';
import styled from 'styled-components';

export default function ShowList() {
  const ShowList = styled.div`
      overflow: auto;
      height: 100vh;
      background: brown;
    `;

  return (
    <ShowList className="wrapper" />
  );
}
