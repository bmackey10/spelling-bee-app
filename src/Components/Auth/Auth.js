import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Services/AuthService";
import SpellingBeeCardIcon from "../../Icons/spelling-bee-card-icon.svg";

/* Render Register and Login Modules */
const AuthModule = () => {
    const navigate = useNavigate();

    // redirect already authenticated users back to home
    useEffect(() => {
        if (checkUser()) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="bg-white py-12 sm:py-16 px-16 sm:px-32 xl:px-48 overflow-hidden h-4/6 sm:h-5/6">
            <div className="mx-auto max-w-7xl border-2 border-black rounded-lg p-2 h-full">
                <div className="flex mx-auto max-w-7xl border-0 rounded-lg shadow-2xl bg-bee-yellow h-full">
                    <div className="flex flex-col justify-center text-center mx-auto max-w-2xl gap-y-1 sm:gap-y-2 p-5 sm:p-10">
                        <img
                            className="h-16 w-auto"
                            src={SpellingBeeCardIcon}
                            alt=""
                        />
                        <h2 className="text-5xl font-bold text-black font-zilla-slab">
                            Spelling Bee
                        </h2>
                        <p className="text-xl tracking-tight text-black sm:text-2xl font-zilla-slab">
                            How many words can you make with 7 letters?
                        </p>
                        <div className="pt-4">
                            <Link to="/auth/login">
                                <button
                                    type="button"
                                    className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-8 py-2 text-sm font-semibold"
                                >
                                    Login
                                </button>
                            </Link>
                            <br />
                            <br />
                            <Link to="/auth/register">
                                <button
                                    type="button"
                                    className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-8 py-2 text-sm font-semibold"
                                >
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModule;
