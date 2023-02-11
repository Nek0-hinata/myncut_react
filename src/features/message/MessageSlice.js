import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { MessageConfig, MessageStatus } from '../../utils/constants'

export const messageAsyncAdded = createAsyncThunk(
  'messages/messageAdded',
  async ({status = MessageStatus.ERROR, time = MessageConfig.timeout}, {dispatch}) => {
    const action = dispatch(messageAdded({
      status, time
    }))
    setTimeout(() => {
      dispatch(messageRemoved(action.payload))
    }, time)
  }
)

const messageSlice = createSlice({
  name: 'massages',
  initialState: {
    list: [],
    maxCount: MessageConfig.maxCount
  },
  reducers: {
    messageAdded: {
      reducer(state, action) {
        const {time} = action.payload
        state.list.push(action.payload)
        setTimeout(() => {
          messageRemoved(action.payload)
        }, time)
      },
      prepare({status = MessageStatus.ERROR, time = MessageConfig.timeout, message = MessageConfig.defaultMessage}) {
        return {
          payload: {
            id: nanoid(),
            status,
            time,
            message
          }
        }
      }
    },
    messageRemoved: {
      reducer(state, action) {
        const {id: delId} = action.payload
        state.list = state.list.filter(message => message.id !== delId)
      }
    }
  }
})

export const {messageAdded, messageRemoved} = messageSlice.actions

export default messageSlice.reducer