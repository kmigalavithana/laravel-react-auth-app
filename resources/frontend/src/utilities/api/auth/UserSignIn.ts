import axios, { type AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {IUserSignInPayload} from "../../types/signIn/Signin";



export const UserSignIn = createAsyncThunk<AxiosResponse<any> | undefined, IUserSignInPayload>("auth/signIn",
    async ({ signDetails }) => {
        console.log(signDetails);
        return axios.get("/sanctum/csrf-cookie").then(async () => {
            try {
             const  response =   await axios.post("/api/sign-in", signDetails);

             if (response.status === 200) {
                 return response.data;
             }


            } catch (error) {
                console.log(error);
            }
        });
    },
);
