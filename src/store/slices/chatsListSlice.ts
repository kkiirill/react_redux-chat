import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  list: null,
  modifiedList: [],
  contactsList: null,
  showChat: false,
  activeList: {},
};

export const chatstListReducer = createSlice({
  name: "chatsList",
  initialState,
  reducers: {
    setChatsList(state, action: PayloadAction<any>) {
      state.list = action.payload;
      state.modifiedList = action.payload;
    },
    setContactsChatsList(state, action: PayloadAction<any>) {
      state.contactsList = action.payload;
    },
    setActiveList(state, action: PayloadAction<any>) {
      state.activeList = action.payload;
    },
    setShowNewChat(state, action: PayloadAction<any>) {
      state.showChat = action.payload;
    },
    setModifiedList(state, action: PayloadAction<any>) {
      state.modifiedList = [...state.list].filter((item: { title: string; }) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      })
    }
  },
});

export const {
  setChatsList,
  setActiveList,
  setShowNewChat,
  setContactsChatsList,
  setModifiedList
} = chatstListReducer.actions;
