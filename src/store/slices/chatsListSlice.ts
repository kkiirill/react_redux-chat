import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
  list: [{id: 1, name: 'Miky Tyson', message: 'Hi whatsssupp?', image: require('../../images/test-user2.png')}, {id: 2, name: 'Nic Tesla', message: 'Are you here?', image: require('../../images/test-user2.png')}, {id: 3,name: 'Steave Jobs', message: 'Where is my money?', image: require('../../images/test-user2.png')}],
  newList: [{id: 1,name: 'Steave Jobs', image: require('../../images/test-user2.png')},{id: 2,name: 'Steave Jobs', image: require('../../images/test-user2.png')},{id: 3,name: 'Steave Jobs', image: require('../../images/test-user2.png')}],
  showChat: false,
  activeList: null,
};

export const chatstListReducer = createSlice({
  name: "chatsList",
  initialState,
  reducers: {
    setChatsList(state, action: PayloadAction<any>) {
      state.list.push({
        id: Math.random,
        title: action.payload.text,
      })
    },
    setActiveList(state, action: PayloadAction<any>) {
      state.activeList = action.payload.id
    },
    setShowNewChat(state, action: PayloadAction<any>) {
      state.showChat = action.payload
    }
  },
});

export const { setChatsList, setActiveList, setShowNewChat} = chatstListReducer.actions;
