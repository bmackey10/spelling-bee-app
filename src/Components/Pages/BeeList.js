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
                    const beeDate = new Date(spellingBee.get("beeDate"));
                    const dayOfMonth = beeDate.getDate(); // Get the day of the month
                    const month = beeDate.getMonth() + 1; // Get the month (getMonth() returns 0-11 so add 1)
                    const year = beeDate.getFullYear(); // Get the year

                    // Format the date as DD/MM/YYYY. Modify as needed for different formats
                    const formattedDate = `${dayOfMonth}/${month}/${year}`;

                    return (
                      <li key={spellingBee.objectId}>
                        {formattedDate}
                      </li>
                    );
                })}
            </ul>
          )}
      </div>
    );
  };
  
  export default BeeList;