import Parse from "parse";
/* SERVICE FOR PARSE SPELLING BEE OPERATIONS */

/* READ Operation - get Spelling Bee by ID */
export const getSpellingBeeById = (id) => {
    const SpellingBee = Parse.Object.extend("SpellingBees");
    const query = new Parse.Query(SpellingBee);
    return query.get(id).then((result) => {
        // return Spelling Bee object with objectId: id
        return result;
    });
};

export let SpellingBees = {};
SpellingBees.collection = [];

/* READ Operation - get all Spelling Bees in Parse class Spelling Bees */
export const getAllSpellingBees = () => {
    const SpellingBee = Parse.Object.extend("SpellingBees");
    const query = new Parse.Query(SpellingBee);
    return query.find().then((results) => {
        console.log("results: ", results);
        // returns array of Spelling Bee objects
        return results;
    });
};
