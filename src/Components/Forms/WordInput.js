import { useState, useEffect } from "react";
import ResultInput from "./ResultInput.js";
import { getAllBeeSolutionsByBeeID } from "../Services/BeeSolutions.js"
import { useParams } from "react-router-dom";

/*
- handles the word inputted by the user (either by text input or button clicks)
- checks if the word inputted by the user is one of the associated bee solutions
*/

const WordInput = ({ beeLetters }) => {
    const [inputWord, setInputWord] = useState("");
    const { beeId } = useParams(); // beeId is the objectId from the URL
    const [beeSolutions, setBeeSolutions] = useState([]);

    useEffect(() => {
        // Use the ID to get all the solutions for this specific spelling bee
        getAllBeeSolutionsByBeeID(beeId).then((beeSolutions) => {
            setBeeSolutions(beeSolutions);
        }).catch((error) => {
          console.error('Error fetching Spelling Bee Solutions by ID:', error);
        });
      }, [beeId]);

    
    // need to figure out how to check if the word doesn't use the correct letters
    function getResult(beeSolutions, inputWord) {
        if (beeSolutions.includes(inputWord)) {
        return "Great job! You found a word.";
        } else {
        return "This is not a word.";
        } //else if () {
        //return "This word does not use the correct letters.";
       // }
    }

    // allows users to form word with button clicks
    const handleClick = (e) => {
        e.preventDefault();
        setInputWord(inputWord.concat(e.target.value));
    };

    // allows users to form word by typing in textbox
    const handleInputChange = (e) => {
        setInputWord(e.target.value.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here is where we were checking the inputWord against a dictionary
        // For now, let's just log it to the console
        console.log(inputWord);
        // Reset input word after submitting
        setInputWord("");
    };

return (
    <div>
        <div>{beeLetters.map((letter) => (<button type="button" value={letter} onClick={handleClick}>{letter}</button>))}</div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputWord} onChange={handleInputChange} />
            <input type="submit" value="Submit"/>
        </form>
        <ResultInput beeSolutions={beeSolutions} inputWord={inputWord} getResult={getResult}/>
    </div>
);
};

export default WordInput;