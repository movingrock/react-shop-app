const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("./user/user.slice");

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
