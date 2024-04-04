import Parse from 'parse';

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
  
    console.log("User: ", user);
    return user
      .signUp()
      .then((newUserSaved) => {
        return newUserSaved;
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
};

/* Log the user in */
export const loginUser = (currUser) => {
    const user = new Parse.User();
  
    user.set("password", currUser.password);
    user.set("username", currUser.email);
  
    console.log("User: ", user);
    console.log();
    return user
      .logIn(user.email, user.password)
      .then((currUserSaved) => {
        return currUserSaved;
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
};

/* Log the user out */
export const logoutUser = () => {
    return Parse.User.logOut()
      .then(() => {
        console.log('Successfully logged out');
      })
      .catch((error) => {
        alert(`Error during logout: ${error.message}`);
      });
  };

/* Check if the current user is authenticated */
export const checkUser = () => {
  return !!Parse.User.current(); // Returns true if there's a user, false otherwise
};
