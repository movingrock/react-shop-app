const { createSlice } = require("@reduxjs/toolkit");

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { email: "", token: "", id: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.toekn;
      state.id = action.payload.id;
      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
