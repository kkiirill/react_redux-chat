import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
  email: null,
  fullName: null,
  photoURL: null,
  likes: false,
  info: {
    id: 1234,
    name: 'John Smith',
    image: require('../../images/test-user1.png')
  }
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<any>) {
     state.list.push(
     )
    },
    setUser(state, action: PayloadAction<any>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.photoURL = action.payload.photoURL;
    },
    removeUser(state) {
      state.email = null;
      state.id = null
    },
  },
});

export const { setUser, removeUser } = userReducer.actions;
