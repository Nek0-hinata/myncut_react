import React from 'react';
import styled from 'styled-components';
import MessageContainer from './components/Items/MessageContainer';
import SideBar from './components/ItemsList/SideBar';
import ShowList from './components/ItemsList/ShowList';
import RouterView from './app/RouterView';

const StyledApp = styled.div`
    `;
export default function App() {
  return (
    <StyledApp>
      <SideBar />
      <ShowList>
        <RouterView />
      </ShowList>
      <MessageContainer />
    </StyledApp>
  );
}
