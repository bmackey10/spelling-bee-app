import Parse from "parse";

/* Add a guess to the database */
export const addGuess = (currUser, currBee, newPoints, newGuess) => {
    let guess = new Parse.Object("UserAnswers");

    guess.set("user", currUser);
    guess.set("guess", newGuess);
    guess.set("spellingBee", currBee);
    guess.set("pointsGiven", newPoints);

    return guess
        .save()
        .then((newGuessSaved) => {
            return newGuessSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

// get all guesses by user ID and bee ID
export const getAllUserGuessesByBeeID = (currBee, currUser) => {
    const UserAnswers = new Parse.Object.extend("UserAnswers");
    const query = new Parse.Query(UserAnswers);
    query.equalTo("spellingBee", currBee);
    query.equalTo("user", currUser);
    return query.find().then((results) => {
        return results;
    });
};
