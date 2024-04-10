import React from "react";

/* Form to login/register from Feature 5 Kickoff Solution */
const AuthForm = ({ user, isLogin, onChange, onSubmit, textValue, errorMessage }) => {
    return (
        <div className="flex items-start justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="text-center text-5xl font-bold text-black font-zilla-slab">
                    {textValue}
                </h2>
                <form
                    className="mt-8 space-y-6"
                    onSubmit={onSubmit}
                    autoComplete="off"
                >
                    {!isLogin && (
                        <div>
                            <div>
                                <label
                                    htmlFor="first-name-input"
                                    className="sr-only"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-bee-yellow focus:border-bee-yellow focus:z-10 sm:text-sm"
                                    id="first-name-input"
                                    value={user.firstName}
                                    onChange={onChange}
                                    name="firstName"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name-input"
                                    className="sr-only"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-bee-yellow focus:border-bee-yellow focus:z-10 sm:text-sm"
                                    id="last-name-input"
                                    value={user.lastName}
                                    onChange={onChange}
                                    name="lastName"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <label htmlFor="email-input" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-bee-yellow focus:border-bee-yellow focus:z-10 sm:text-sm"
                            id="email-input"
                            value={user.email}
                            onChange={onChange}
                            name="email"
                            placeholder="Email address"
                            required
                        />
                        <label htmlFor="password-input" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-bee-yellow focus:border-bee-yellow focus:z-10 sm:text-sm"
                            id="password-input"
                            value={user.password}
                            onChange={onChange}
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="mb-4 text-center text-sm text-red-600">
                            {errorMessage}
                        </div>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bee-yellow"
                            onSubmit={onSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
