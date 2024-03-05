/* List of all spelling Bees displayed by their date */
const BeeList = ({ spellingBees }) => {
    return (
      <div>
          {spellingBees.length > 0 && (
            <ul>
                {spellingBees.map((spellingBee) =>
                    (<li key={spellingBee.objectId}>
                    {spellingBee.centerLetter}
                    </li>)
                )}
            </ul>
          )}
      </div>
    );
  };
  
  export default BeeList;