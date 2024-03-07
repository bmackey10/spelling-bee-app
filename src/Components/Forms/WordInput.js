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
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="pl-24 mx-auto">
                        <input type="text" value={inputWord} onChange={handleInputChange} placeholder="Type or click" className="caret-bee-yellow border-0 bg-transparent text-black placeholder:text-gray-400 focus:ring-0 text-lg"/>
                    </div>
                    <div className="flex flex-row justify-between">{beeLetters.map((letter) => (<button type="button" className="bg-slate-200 hover:bg-slate-300 text-black hover:text-black rounded-full px-4 py-2 text-sm font-semibold" value={letter} onClick={handleClick}>{letter}</button>))}</div>
                    <div className="py-2 mx-auto">
                        <button type="submit" className="w-min border-2 border-slate-200 bg-white hover:bg-slate-200 text-black hover:text-black rounded-full px-8 py-2 text-sm font-semibold">Enter</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md">
            <div className="lg:h-full rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-200 lg:flex lg:flex-col lg:justify-center">
                <div className="mx-auto max-w-xs">
                    <ResultInput beeSolutions={beeSolutions} inputWord={inputWord} getResult={getResult}/>
                </div>
            </div>
        </div>
    </div>
);
};

export default WordInput;