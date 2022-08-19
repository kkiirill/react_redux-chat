import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  text: "",
  list: [
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
    { author: 123, text: 'hello man' },
    { author: 123,text: 'whaaasttttttt man'},
    { author: 1234,text: 'goooooooooodddddddddd news man'},
  ],
};

export const messagesReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<any>) {
      state.text = action.payload;
    },
  },
});

export const { addMessage } = messagesReducer.actions;
