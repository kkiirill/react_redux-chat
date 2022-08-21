import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  image: null,
  name: null,
  id: null,
  email: null,
  users: [],
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<any>) {
      state.list.push();
    },
    setUser(state, action: PayloadAction<any>) {
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    setUsers(state, action: PayloadAction<any>) {
      state.users?.push(action.payload)
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, setUsers,removeUser } = userReducer.actions;

