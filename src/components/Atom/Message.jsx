import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  AiFillApi,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillCloud,
} from 'react-icons/ai';
import { MessageConfig, MessageStatus } from '../../utils/constants';

const StyledToast = styled.div`
  display: inline-block;
  box-shadow: 0 5px 10px #BDBDBD;
  margin: 100px;

  .icon {
    display: inline-block;
    margin: 20px;
    vertical-align: top;
  }

  .title {
    display: inline-block;
    width: 100px;
    margin: 20px;
    vertical-align: top;
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

export default function Message(props) {
  const {
    style, message, status,
  } = props;

  return (
    <StyledToast
      config={{
        style,
      }}
    >
      {iconSelect(status)}
      <div className="title">
        {message}
      </div>
    </StyledToast>

  );
}

Message.propTypes = {
  style: PropTypes.shape({
    radius: PropTypes.number,
  }),
  message: PropTypes.string,
  status: PropTypes.string,
};

Message.defaultProps = {
  style: {
    radius: 150,
  },
  message: MessageConfig.defaultMessage,
  status: MessageStatus.ERROR,
};
