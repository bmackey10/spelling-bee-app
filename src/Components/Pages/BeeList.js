import { Link } from "react-router-dom";

/* 
- List of all spelling Bees displayed by their date 
- Should to the respective puzzle
*/
const BeeList = ({ spellingBees }) => {
    return (
      <div className="grid grid-cols-2 gap-4 pt-6">
          {spellingBees.map((spellingBee) => {
              // Get the spelling bee date
              const beeDate = new Date(spellingBee.get("beeDate"));
              const dayOfMonth = beeDate.getDate(); // Get the day of the month
              const month = beeDate.getMonth() + 1; // Get the month (getMonth() returns 0-11 so add 1)
              const year = beeDate.getFullYear(); // Get the year

              // Format the date as DD/MM/YYYY. Modify as needed for different formats
              const formattedDate = `${month}/${dayOfMonth}/${year}`;

              return (
                <Link to={`/spelling-bee/${spellingBee.id}`}>
                  <button type="button" className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-2 sm:px-8 py-2 text-sm font-semibold">Play: {formattedDate}</button>
                </Link>
              );
          })}
      </div>
    );
  };
  
  export default BeeList;