import { configureStore } from "@reduxjs/toolkit";
import { SignUpReducer } from "./register/register.redux";

const store = configureStore({
  reducer: {
     SignUpReducer
  },
});
export default store
