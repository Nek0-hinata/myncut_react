import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import {
  AiFillApi,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillCloud,
} from 'react-icons/ai';
import { MessageConfig, MessageStatus } from '../../utils/constants';

const messageShow = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const messageHide = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`;

const StyledToast = styled.div`
  display: inline-block;
  box-shadow: 0 5px 10px #BDBDBD;
  background: white;
  margin: 10px;
  padding: 20px;
  animation: ${messageShow} ${(props) => props.showTime}s, ${messageHide} ${(props) => props.hideTime}s ${(props) => props.duration - props.hideTime}s forwards;

  .icon {
    display: inline-block;
    margin: 0 10px;
    vertical-align: middle;
  }

  .title {
    display: inline-block;
    margin: 0 10px;
    vertical-align: middle;
  }
`;

function iconSelect(status) {
  switch (status) {
    case MessageStatus.SUCCESS:
      return (
        <AiFillCheckCircle className="icon" />
      );
    case MessageStatus.LOADING:
      return (
        <AiFillCloud className="icon" />
      );
    case MessageStatus.ERROR:
      return (
        <AiFillCloseCircle className="icon" />
      );
    default:
      return (
        <AiFillApi className="icon" />
      );
  }
}

function Message(props) {
  const {
    time, message, status,
  } = props;

  return (
    <StyledToast
      duration={time / 1000}
      showTime={MessageConfig.showAnimationDuration / 1000}
      hideTime={MessageConfig.hideAnimationDuration / 1000}
    >
      {iconSelect(status)}
      <div className="title">
        {message}
      </div>
    </StyledToast>

  );
}

Message.propTypes = {
  time: PropTypes.number,
  message: PropTypes.string,
  status: PropTypes.string,
};

Message.defaultProps = {
  time: 3000,
  message: MessageConfig.defaultMessage,
  status: MessageStatus.ERROR,
};

export default Message;
