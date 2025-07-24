import { createSlice } from "@reduxjs/toolkit";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";
import type {IAuthInitialState} from "../../types/Slices/AuthSlice";

interface IAuthPayload {
    user_id: string;
    user_token: string;
    user_role: number;
}

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    isAuthenticated: false,
    user_role: 0,
    isLoading: false,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserSignIn.pending, (state) => {
                state.isLoading = true;
                state.token = ''
                state.isAuthenticated = false;
            })
            .addCase(
                UserSignIn.fulfilled,
                (state, {payload}) => {
                    console.log(payload)
                    setPayloadValuesIntoStore(state, payload)
                },
            )
            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesIntoStore = (state: IAuthInitialState, payload: IAuthPayload) => {
    if (!payload) {
        return
    }

  console.log({payload})

    state.user_id = payload.user_id
    state.token = payload.token;
    state.user_role =payload.user_role;
    state.isAuthenticated = true;
    state.isLoading = false;

    localStorage.setItem('token',payload.user_token)
}

export default authSlice.reducer;
