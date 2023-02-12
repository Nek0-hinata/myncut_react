import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { messageAsyncAdded } from './features/message/MessageSlice';
import { MessageStatus } from './utils/constants';
import MessageContainer from './components/Items/MessageContainer';
import SideBar from './components/ItemsList/SideBar';

const StyledApp = styled.div`
    `;
export default function App() {
  const dispatch = useDispatch();
  return (
    <StyledApp>
      <SideBar />
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
            message: '你好你好你好你好你好你好你好',
          }));
        }}
      >
        点击
      </button>
    </StyledApp>
  );
}
