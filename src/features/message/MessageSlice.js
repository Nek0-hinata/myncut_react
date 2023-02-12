import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import { MessageConfig, MessageStatus } from '../../utils/constants'

const messageAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.date.localeCompare(b.date)
})

export const messageAsyncAdded = createAsyncThunk(
  'messages/messageAdded',
  async (
    { status = MessageStatus.ERROR, time = MessageConfig.timeout, message = MessageConfig.defaultMessage },
    { dispatch }) => {
    const action = dispatch(messageAdded({
      status, time, message
    }))
    setTimeout(() => {
      dispatch(messageRemoved(action.payload))
    }, time)
  }
)

const messageSlice = createSlice({
  name: 'massages',
  initialState: messageAdapter.getInitialState({
    maxCount: MessageConfig.maxCount
  }),
  reducers: {
    messageAdded: {
      reducer : messageAdapter.addOne,
      prepare ({
        status = MessageStatus.ERROR,
        time = MessageConfig.timeout,
        message = MessageConfig.defaultMessage,
      }) {
        return {
          payload: {
            id: nanoid(),
            status,
            time,
            message,
            isLoad: false,
            isHide: false,
            date: new Date().toISOString()
          },
        }
      },
    },
    messageRemoved: {
      reducer (state, action) {
        const { id: delId } = action.payload
        messageAdapter.removeOne(state, delId)
      },
    },
  },
})

export const {
  selectById: selectMessageById,
  selectAll: selectMessageAll,
  selectTotal: selectMessageTotal,
  selectEntities: selectMessageEntities,
  selectIds: selectMessageIds
} = messageAdapter.getSelectors(state => state.messages)

export const { messageAdded, messageRemoved } = messageSlice.actions

export default messageSlice.reducer