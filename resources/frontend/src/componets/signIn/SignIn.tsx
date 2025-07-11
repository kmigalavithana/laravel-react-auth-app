import React, {useEffect, useState} from "react";
import SignInForm from "./SignInForm.tsx";
import {UserSignIn} from "../../utilities/api/auth/UserSignIn.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store.tsx";
import type {ISignInState} from "../../utilities/types/signIn/Signin";
import {useNavigate} from "react-router";

const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });
    // need to define type definition for dispatching method
    const dispatch = useDispatch<AppDispatch>()

    const {  user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    const navigate = useNavigate();

    useEffect(() => {

        if(isAuthenticated && user_role ===1){
           navigate('/dashboard')
        }

    }, [user_role,isAuthenticated,navigate]);

    const handleInputField = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;

        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        await dispatch(UserSignIn({signDetails}));
    };

    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
