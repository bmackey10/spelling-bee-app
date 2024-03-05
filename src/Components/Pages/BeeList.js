import { Link } from "react-router-dom";

/* 
- List of all spelling Bees displayed by their date 
- Should to the respective puzzle
*/
const BeeList = ({ spellingBees }) => {
    return (
      <div>
          {spellingBees.length > 0 && (
            <ul>
                {spellingBees.map((spellingBee) => {
                    // Get the spelling bee date
                    //const objectID =  spellingBee.get("objectId");
                    const beeDate = new Date(spellingBee.get("beeDate"));
                    const dayOfMonth = beeDate.getDate(); // Get the day of the month
                    const month = beeDate.getMonth() + 1; // Get the month (getMonth() returns 0-11 so add 1)
                    const year = beeDate.getFullYear(); // Get the year

                    // Format the date as DD/MM/YYYY. Modify as needed for different formats
                    const formattedDate = `${month}/${dayOfMonth}/${year}`;
                    const routeDate = `${month}${dayOfMonth}${year}`;

                    return (
                      <li key={spellingBee.objectId}>
                        <Link to={"/spelling-bee/" + routeDate}>Play: {formattedDate}</Link>
                      </li>
                    );
                })}
            </ul>
          )}
      </div>
    );
  };
  
  export default BeeList;