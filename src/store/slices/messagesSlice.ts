import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  text: "",
  list: null,
};

export const messagesReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<any>) {
      state.text = action.payload;
    },
    setMessages(state, action: PayloadAction<any>) {
      state.list = action.payload;
    }
  },
});

export const { addMessage, setMessages } = messagesReducer.actions;
