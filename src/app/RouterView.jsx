import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { messageAsyncAdded } from '../features/message/MessageSlice';
import { MessageStatus } from '../utils/constants';

export default function RouterView() {
  const dispatch = useDispatch();
  return (
    <Routes>
      <Route
        index
        element={(
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
        )}
      />
    </Routes>
  );
}
