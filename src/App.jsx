import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import Toast from './components/Atom/Toast';

const StyledApp = styled.div`
      height: 100vh;
      width: 100vw;
    `;
export default function App() {
  return (
    <Router>
      <StyledApp>
        {/* <SideBar */}
        {/*  leftList={[]} */}
        {/* /> */}
        {/* <ShowList /> */}
        <Toast />
      </StyledApp>
    </Router>
  );
}
