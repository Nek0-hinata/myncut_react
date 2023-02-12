import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../Atom/Message';
import {
  messageRemoved,
  selectMessageAll,
  selectMessageIds,
  selectMessageTotal,
} from '../../features/message/MessageSlice';

const StyledMessageContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  list-style-type: none;
`;

export default function MessageContainer() {
  const messageTotal = useSelector(selectMessageTotal);
  const messageIds = useSelector(selectMessageIds);
  const messageAll = useSelector(selectMessageAll) || [];
  const maxCount = useSelector((state) => state.messages.maxCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messageTotal > maxCount) {
      dispatch(messageRemoved({
        id: messageIds[0],
      }));
    }
  }, [dispatch, maxCount, messageIds, messageTotal]);

  const messageList = messageAll.map((message) => (
    <li key={message.id}>
      <Message
        message={message.message}
        time={message.time}
        status={message.status}
      />
    </li>
  ));

  return (
    <StyledMessageContainer>
      {messageList}
    </StyledMessageContainer>
  );
}
