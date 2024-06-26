import Parse from "parse";

/* Get current user */
export const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    return currentUser;
};

/* Create a new user */
export const createUser = (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    return user
        .signUp()
        .then((newUserSaved) => {
            // Successfully registered
            return { success: true, user: newUserSaved };
        })
        .catch((error) => {
            // Return the error message instead of alerting
            return { success: false, error: error.message };
        });
};

/* Log the user in */
export const loginUser = (currUser) => {
    const user = new Parse.User();

    user.set("password", currUser.password);
    user.set("username", currUser.email);

    return user
        .logIn(user.email, user.password)
        .then((currUserSaved) => {
            // Successfully logged in
            return { success: true, user: currUserSaved };
        })
        .catch((error) => {
            // Return the error message instead of alerting
            return { success: false, error: error.message };
        });
};

/* Log the user out */
export const logoutUser = () => {
    return Parse.User.logOut()
        .then(() => {
            console.log("Successfully logged out");
        })
        .catch((error) => {
            alert(`Error during logout: ${error.message}`);
        });
};

/* Check if the current user is authenticated */
export const checkUser = () => {
    return !!Parse.User.current(); // Returns true if there's a user, false otherwise
};
