import { useState, useEffect } from "react";
import ResultInput from "./ResultInput.js";
import { getAllBeeSolutionsByBeeID, getSolutionPoints } from "../Services/BeeSolutions.js"
import { useParams } from "react-router-dom";
import { getSpellingBeeById } from "../Services/SpellingBees.js";
import { addGuess, getAllUserGuessesByBeeID } from "../Services/UserAnswers.js";
import { getCurrentUser } from "../Services/AuthService.js";

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
    const [userGuesses, setUserGuesses] = useState([]);
    const [userPoints, setUserPoints] = useState(0);

    useEffect(() => {
        // Use the ID to get all the solutions for this specific spelling bee
        getSpellingBeeById(beeId).then((spellingBee) => {
            getAllBeeSolutionsByBeeID(spellingBee).then((beeSolutions) => {
                setBeeSolutions(beeSolutions.map((bee) => bee.get("solution")));
            }).catch((error) => {
                console.error('Error fetching Spelling Bee Solutions by ID:', error);
            });
        });

        getSpellingBeeById(beeId).then((spellingBee) => {
            getCurrentUser().then((currUser) => {
                getAllUserGuessesByBeeID(spellingBee, currUser).then((results) => {
                        let pointSum = 0;
                        let guessesArr = [];
                        results.map((result) => {
                            pointSum += result.get("pointsGiven");
                            guessesArr.push(result.get("guess"));
                        });
                        setUserPoints(pointSum);
                        setUserGuesses(guessesArr);
                });
            });
        });

    }, [beeId]);

    function getResult(inputWord) {
        if (beeSolutions.includes(inputWord)) {
            setResultString(`Great job! You found the solution: ${inputWord}.`);
            return true;
        } else {
            setResultString(`${inputWord} is not a solution.`);
            return false;
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

    const handleDelete = (e) => {
        setInputWord((inputWord) => inputWord.slice(0, -1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (getResult(inputWord)) {

            getSpellingBeeById(beeId).then((spellingBee) => {
                getSolutionPoints(spellingBee, inputWord).then((answerPoints) => {
                    getCurrentUser().then((currUser) => {
                        addGuess(currUser, spellingBee, answerPoints, inputWord);
                        setUserPoints(userPoints + answerPoints);
                        setUserGuesses([...userGuesses, inputWord]);
                    })
                })
            })
        }

        setShowResult(true); 

        setInputWord("");
        // Reset input word after submitting
    };

return (
    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none overflow-hidden">
        <div className="p-8 sm:p-10 lg:flex-auto">
            <form>
                <div className="grid grid-rows-3 grid-cols-4 sm:grid-cols-6 gap-2">
                    <div className="col-span-2 col-start-2 sm:col-start-3">
                        <input type="text" value={inputWord} onChange={handleInputChange} placeholder="Type or click" className="caret-bee-yellow w-full border-0 bg-transparent text-black text-center placeholder:text-gray-400 focus:ring-0 text-lg"/>
                    </div>
                    <div className="col-span-4 sm:col-span-6 flex flex-wrap justify-between">{beeLetters.map((letter) => (<button type="button" className="bg-slate-200 hover:bg-slate-300 text-black hover:text-black rounded-full px-6 text-sm font-semibold" value={letter} onClick={handleClick}>{letter}</button>))}</div>
                    <div className="col-span-2 col-start-1 sm:col-start-2 justify-self-center py-2">
                        <button type="button" onClick={handleDelete} className="w-min border-2 border-slate-200 bg-white hover:bg-slate-200 text-black hover:text-black rounded-full px-8 py-2 text-sm font-semibold">Delete</button>
                    </div>
                    <div className="col-span-2 col-start-3 sm:col-start-4 justify-self-center py-2">
                        <button type="submit" onClick={handleSubmit} className="w-min border-2 border-slate-200 bg-white hover:bg-slate-200 text-black hover:text-black rounded-full px-8 py-2 text-sm font-semibold">Enter</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md">
            <div className="lg:h-full rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-200 lg:flex lg:flex-col lg:justify-center">
                <div className="mx-auto max-w-xs">
                    <ResultInput showResult={showResult} resultString={resultString}/>
                    <div className="text-base font-semibold text-gray-600">You have found {userGuesses.length} words.</div>
                    {userGuesses.map((guess) => (<div className="text-base font-semibold text-gray-600">{guess}</div>))}
                    {userPoints > 0 ? (<div className="text-base font-semibold text-gray-600">Score: {userPoints}</div>) : <div/>}
                </div>
            </div>
        </div>
    </div>
);
};

export default WordInput;