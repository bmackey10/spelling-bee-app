import Parse from 'parse';

/* Get current user */
export const getCurrentUser = async () => {
    const currentUser = Parse.User.current();
    return currentUser;
};

/* Create a new user */
export const createUser = async (firstName, lastName, email, password) => {
    const user = new Parse.User();

    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("email", email);
    user.set("password", password);

    await user.Signup();
};

/* Log the user in */
export const loginUser = async (email, password) => {
    try {
        await Parse.User.logIn(email, password);
    } catch (error) {
        console.log('Error while logging in user: ', error);
    }
};

/* Log the user out */
export const logoutUser = async () => {
    try {
        await Parse.User.logOut();
    } catch (error) {
        console.log('Error while logging out user: ', error);
    }
};

/* Check if the current user is authenticated */
export const checkUser = async () => {
    return Parse.User.current()?.authenticated;
};