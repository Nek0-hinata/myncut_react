import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastStatus } from '../../utils/constants';

const StyledToast = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #EEEEEE;
    border-radius: 15px;
    
    img {
      height: ${(props) => props.config.style.radius}px;
      width: ${(props) => props.config.style.radius}px;
    }
    
    .title {
      font-size: 24px;
    }
  `;

function urlSelect(status) {
  switch (status) {
    case ToastStatus.SUCCESS:
      return '/icon/checkCircle.svg';
    case ToastStatus.LOADING:
      return '/icon/cached.svg';
    case ToastStatus.ERROR:
      return '/icon/error.svg';
    default:
      return '/icon/error.svg';
  }
}

export default function Toast(props) {
  const {
    style, message, status, time,
  } = props;

  const imgSrc = urlSelect(status);
  const [isSHow, setIsShow] = useState(true);

  useEffect(() => {
    const initTime = Date.now();
    const timer = setInterval(() => {
      if (Date.now() - initTime >= time) {
        setIsShow(false);
      }
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    isSHow && (
    <StyledToast
      config={{
        style,
      }}
    >
      <img
        src={imgSrc}
        alt={status}
      />
      <div className="title">
        {message}
      </div>
    </StyledToast>
    )
  );
}

Toast.propTypes = {
  style: PropTypes.shape({
    radius: PropTypes.number,
  }),
  message: PropTypes.string,
  status: PropTypes.string,
  time: PropTypes.number,
};

Toast.defaultProps = {
  style: {
    radius: 150,
  },
  message: 'error',
  status: ToastStatus.ERROR,
  time: 5000,
};
