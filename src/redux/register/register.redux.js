import {
    createSlice,
    configureStore,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
import publicAxios from "../../configs/public";
export const createUser = createAsyncThunk("User/createUser", async (data) => {
    const rep = await publicAxios.post("apis/v1/auth/sign-up", data);
    return rep.data;
  });
  export const singIn = createAsyncThunk("User/singIn", async (data) => {
    const rep = await publicAxios.post("apis/v1/auth/sign-in", data);
    return rep.data;
  })
  const SingUpSlice = createSlice({
    name: "data",
    initialState: {
      list: [],
    },
    reducers: {},
    extraReducers: (buider) => {
      buider
        .addCase(createUser.pending, (state, action) => {})
        .addCase(createUser.fulfilled, (state, action) => {
        })
        .addCase(createUser.rejected, (state, action) => {});
    },
  });
  export const SignUpReducer = SingUpSlice.reducer;