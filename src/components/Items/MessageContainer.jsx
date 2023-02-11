import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../Atom/Message';
import { messageRemoved } from '../../features/message/MessageSlice';

const StyledMessageContainer = styled.ul`
  list-style-type: none;
`;

export default function MessageContainer() {
  const messages = useSelector((state) => state.messages.list);
  const maxCount = useSelector((state) => state.messages.maxCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length > maxCount) {
      dispatch(messageRemoved(messages[0]));
    }
  }, [dispatch, maxCount, messages]);

  return (
    <StyledMessageContainer>
      {messages.map(({ status, time }) => (
        <li>
          <Message
            status={status}
            time={time}
          />
        </li>
      ))}
    </StyledMessageContainer>
  );
}
