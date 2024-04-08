import Parse from "parse"; 
/* SERVICE FOR PARSE BEE SOLUTION OPERATIONS */

/* READ Operation - get Bee Solution by ID */
export const getBeeSolutionById = (id) => {
    const BeeSolutions = Parse.Object.extend("BeeSolutions");
    const query = new Parse.Query(BeeSolutions);
    return query.get(id).then((result) => {
      // return Bee Solution object with objectId: id
      return result;
    });
};

export let BeeSolutionsColl = {};
BeeSolutionsColl.collection = [];

/* READ Operation - get all Bee Solutions in Parse class Bee Solutions */
export const getAllBeeSolutions = () => {
    const BeeSolutions = Parse.Object.extend("BeeSolutions");
    const query = new Parse.Query(BeeSolutions);
    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Bee Solution objects
      return results;
    });
};

/* READ Operation - get all Bee Solutions with a particular beeID in Parse class Bee Solutions */
export const getAllBeeSolutionsByBeeID = (beeID) => {
  const BeeSolutions = Parse.Object.extend("BeeSolutions");
  const query = new Parse.Query(BeeSolutions);
  query.equalTo("beeID", beeID); // Assuming 'beeID' is the field that relates to the specific bee
  return query.find().then((results) => {
      // Returns array of BeeSolutions objects that have the specified BeeID
      return results;
  }).catch((error) => {
      // Handle any errors that occur
      console.error("Error getting BeeSolutions by BeeID: ", error);
  });
};

export const getSolutionPoints = (currBee, inputWord) => {
  const BeeSolutions = Parse.Object.extend("BeeSolutions");
  const query = new Parse.Query(BeeSolutions);
  query.equalTo("beeID", currBee); // Assuming 'beeID' is the field that relates to the specific bee
  query.equalTo("solution", inputWord);
  return query.find().then((results) => {
      // Returns array of BeeSolutions objects that have the specified BeeID and solution
      return results[0].get("points"); // there should only be one result
  }).catch((error) => {
      // Handle any errors that occur
      console.error("Error getting BeeSolutions by BeeID: ", error);
  });
};