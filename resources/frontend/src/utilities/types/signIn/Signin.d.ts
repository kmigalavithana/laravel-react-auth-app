import React from "react";

export interface ISignInState {
    email: string,
    password: string,
}
export interface ISignInFromProp {
    handleInputField: (event:React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event:React.FormEvent) =>  Promise<void>
}

export interface IUserSignInPayload {
    signDetails: ISignInState;
}
