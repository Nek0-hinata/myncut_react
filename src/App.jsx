import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { messageAsyncAdded } from './features/message/MessageSlice';
import { MessageStatus } from './utils/constants';
import MessageContainer from './components/Items/MessageContainer';

const StyledApp = styled.div`
      height: 100vh;
      width: 100vw;
    `;
export default function App() {
  const dispatch = useDispatch();
  return (
    <StyledApp>
      {/* <SideBar */}
      {/*  leftList={[]} */}
      {/* /> */}
      {/* <ShowList /> */}
      <MessageContainer />
      <button
        type="button"
        onClick={() => {
          dispatch(messageAsyncAdded({
            status: MessageStatus.SUCCESS,
            time: 3000,
          }));
        }}
      >
        点击
      </button>
    </StyledApp>
  );
}
