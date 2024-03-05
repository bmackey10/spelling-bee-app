import { useState, useEffect } from "react";
import { getAllSpellingBees } from "../Services/SpellingBees.js"
import BeeList from "./BeeList";

/* Users can choose which spelling Bee they'd like to play from the list generated */
const Play = () => {

    const [spellingBees, setSpellingBees] = useState([]);
    
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllSpellingBees().then((spellingBees) => {
            setSpellingBees(spellingBees);
        }).catch((error) => {
            console.error("Error fetching spelling bees:", error);
        });
    }, []);
    
    return (
        <div>
            <h1>Spelling Bee Puzzles</h1>
            {/* Conditional rendering to check that spellingBees is not undefined */}
            {spellingBees.length > 0 && (
                <BeeList spellingBees={spellingBees} />
            )}
        </div>
    );
};

export default Play;