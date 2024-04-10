import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "../Services/AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

/* Authentication Login Module */
const AuthLogin = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    // redirect already authenticated users back to home
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: "",
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (checkUser()) {
            navigate("/");
        }
    }, [navigate]);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (currentUser && add) {
            loginUser(currentUser).then((result) => {
                if (result.success) {
                    navigate("/");
                } else {
                    // Set the error message from the response
                    setLoginError(result.error);
                }
                // redirect user to main app
                setAdd(false);
            });
        }
    }, [navigate, currentUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setCurrentUser({
            ...currentUser,
            [name]: newValue,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
    };

    return (
        <div>
            <AuthForm
                user={currentUser}
                isLogin={true}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                textValue={"Log In to the Spelling Bee"}
                errorMessage={loginError}
            />
        </div>
    );
};

export default AuthLogin;
