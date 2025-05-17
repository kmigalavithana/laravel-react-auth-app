import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/signin/Signin";
import axios from "axios";
import { UserSignIn } from "../../utilities/api/auth/UserSignIn.ts";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store.tsx";

const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });
    //need to define type definition
    const dispatch = useDispatch<AppDispatch>();

    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        await dispatch( UserSignIn({signDetails}));


    };

    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
