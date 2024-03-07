import { useState, useEffect } from "react";
import ResultInput from "./ResultInput.js";
import { getAllBeeSolutionsByBeeID } from "../Services/BeeSolutions.js"
import { useParams } from "react-router-dom";
import { getSpellingBeeById } from "../Services/SpellingBees.js";

/*
- handles the word inputted by the user (either by text input or button clicks)
- checks if the word inputted by the user is one of the associated bee solutions
*/

const WordInput = ({ beeLetters }) => {
    const [inputWord, setInputWord] = useState("");
    const { beeId } = useParams(); // beeId is the objectId from the URL
    const [beeSolutions, setBeeSolutions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [resultString, setResultString] = useState("");

    useEffect(() => {
        // Use the ID to get all the solutions for this specific spelling bee
        getSpellingBeeById(beeId).then((spellingBee) => {
            getAllBeeSolutionsByBeeID(spellingBee).then((beeSolutions) => {
                setBeeSolutions(beeSolutions.map((bee) => bee.get("solution")));
            }).catch((error) => {
                console.error('Error fetching Spelling Bee Solutions by ID:', error);
            });
        })
      }, [beeId]);

    function getResult(inputWord) {
        if (beeSolutions.includes(inputWord)) {
            setResultString(`Great job! You found the word: ${inputWord}.`);
        } else {
            setResultString("This is not a word.");
        }
    }

    // allows users to form word with button clicks
    const handleClick = (e) => {
        e.preventDefault();
        setShowResult(false);
        setInputWord(inputWord.concat(e.target.value));
    };

    // allows users to form word by typing in textbox
    const handleInputChange = (e) => {
        setShowResult(false);
        setInputWord(e.target.value.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        getResult(inputWord)
        setShowResult(true); 

        setInputWord("");
        // Reset input word after submitting
    };

return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none overflow-hidden">
        <div className="p-8 sm:p-10 lg:flex-auto">
            <form>
                <div className="grid grid-rows-3 grid-cols-4 sm:grid-cols-6 gap-4">
                    <div className="col-span-2 col-start-2 sm:col-start-3">
                        <input type="text" value={inputWord} onChange={handleInputChange} placeholder="Type or click" className="caret-bee-yellow border-0 bg-transparent text-black placeholder:text-gray-400 focus:ring-0 text-lg"/>
                    </div>
                    <div className="col-span-4 sm:col-span-6 flex flex-wrap justify-between">{beeLetters.map((letter) => (<button type="button" className="bg-slate-200 hover:bg-slate-300 text-black hover:text-black rounded-full px-6 text-sm font-semibold" value={letter} onClick={handleClick}>{letter}</button>))}</div>
                    <div className="col-span-2 col-start-2 sm:col-start-3 justify-self-center py-2">
                        <button type="submit" onClick={handleSubmit} className="w-min border-2 border-slate-200 bg-white hover:bg-slate-200 text-black hover:text-black rounded-full px-8 py-2 text-sm font-semibold">Enter</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md">
            <div className="lg:h-full rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-200 lg:flex lg:flex-col lg:justify-center">
                <div className="mx-auto max-w-xs">
                    <ResultInput showResult={showResult} resultString={resultString}/>
                </div>
            </div>
        </div>
    </div>
);
};

export default WordInput;