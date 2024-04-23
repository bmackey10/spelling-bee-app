import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "../Services/AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

/* Authentication Register Module */
const AuthRegister = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState("");

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // redirect already authenticated users back to home
    useEffect(() => {
        if (checkUser()) {
            navigate("/");
        }
    }, [navigate]);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (newUser && add) {
            createUser(newUser).then((result) => {
                if (result.success) {
                    navigate("/");
                } else {
                    // Set the error message from the response
                    setRegisterError(result.error);
                }
                setAdd(false);
            });
        }
    }, [navigate, newUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;

        setNewUser({
            ...newUser,
            [name]: newValue,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <AuthForm
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                textValue={"Register for the Spelling Bee"}
                errorMessage={registerError}
            />
        </div>
    );
};

export default AuthRegister;
