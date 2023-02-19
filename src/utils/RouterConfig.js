import { AiFillChrome } from 'react-icons/ai';
import { nanoid } from '@reduxjs/toolkit';
import { RouterType } from './constants';
import Message from '../components/Atom/Message';

// TODO 可以范式化，用户自定义展示模块
const RouterConfig = [
  {
    key: nanoid(),
    meta: {
      icon: AiFillChrome,
      title: 'group1',
    },
    type: RouterType.SIDEBAR,
    element: Message,
    routes: [
      {
        key: nanoid(),
        meta: {
          text: '1-1',
        },
        path: '/401',
        type: RouterType.SIDEBAR,
        element: Message,
      },
      {
        key: nanoid(),
        meta: {
          text: '1-2',
        },
        path: '/402',
        type: RouterType.SIDEBAR,
        element: Message,
      },
    ],
  },
  {
    key: nanoid(),
    meta: {
      title: '22',
    },
    type: RouterType.SIDEBAR,
    element: Message,
  },
];

export default RouterConfig;
