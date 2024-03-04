import Parse from "parse"; 
/* SERVICE FOR PARSE BEE SOLUTION OPERATIONS */

/* READ Operation - get Bee Solution by ID */
export const getBeeSolutionById = (id) => {
    const BeeSolution = Parse.Object.extend("BeeSolution");
    const query = new Parse.Query(BeeSolution);
    return query.get(id).then((result) => {
      // return Bee Solution object with objectId: id
      return result;
    });
};

export let BeeSolutions = {};
BeeSolutions.collection = [];

/* READ Operation - get all Bee Solutions in Parse class Bee Solutions */
export const getAllBeeSolutions = () => {
    const BeeSolution = Parse.Object.extend("BeeSolution");
    const query = new Parse.Query(BeeSolution);
    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Bee Solution objects
      return results;
    });
};