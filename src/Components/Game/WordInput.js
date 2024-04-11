import { useState, useEffect } from "react";
import ResultInput from "./ResultInput.js";
import {
    getAllBeeSolutionsByBeeID,
    getSolutionPoints,
} from "../Services/BeeSolutions.js";
import { useParams } from "react-router-dom";
import { getSpellingBeeById } from "../Services/SpellingBees.js";
import { addGuess, getAllUserGuessesByBeeID } from "../Services/UserAnswers.js";
import { getCurrentUser } from "../Services/AuthService.js";
import ProgressBar from "./ProgressBar.js";

/*
- handles the word inputted by the user (either by text input or button clicks)
- checks if the word inputted by the user is one of the associated bee solutions
*/

const WordInput = ({ beeLetters, centerLetter, totalPoints }) => {
    const [inputWord, setInputWord] = useState("");
    const { beeId } = useParams(); // beeId is the objectId from the URL
    const [beeSolutions, setBeeSolutions] = useState([]);
    const [pangrams, setPangrams] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [resultString, setResultString] = useState("");
    const [userGuesses, setUserGuesses] = useState([]);
    const [userPoints, setUserPoints] = useState(0);

    useEffect(() => {
        // Use the ID to get all the solutions for this specific spelling bee
        getSpellingBeeById(beeId).then((spellingBee) => {
            getAllBeeSolutionsByBeeID(spellingBee)
                .then((solutions) => {
                    setBeeSolutions(
                        solutions.map((solution) => solution.get("solution"))
                    );
                    // Find and set all pangrams
                    const foundPangrams = solutions
                        .filter((solution) => solution.get("pangram") === true)
                        .map((solution) => solution.get("solution"));
                    setPangrams(foundPangrams);
                })
                .catch((error) => {
                    console.error(
                        "Error fetching Spelling Bee Solutions by ID:",
                        error
                    );
                });
        });

        getSpellingBeeById(beeId).then((spellingBee) => {
            getCurrentUser().then((currUser) => {
                getAllUserGuessesByBeeID(spellingBee, currUser).then(
                    (results) => {
                        let pointSum = 0;
                        let guessesArr = [];
                        results.forEach((result) => {
                            pointSum += result.get("pointsGiven");
                            guessesArr.push(result.get("guess"));
                        });
                        setUserPoints(pointSum);
                        setUserGuesses(guessesArr);
                    }
                );
            });
        });
    }, [beeId]);

    function getResult(inputWord) {
        if (inputWord.length < 4) {
            setResultString(`${inputWord} is too short.`);
            return false;
        } else if (pangrams.includes(inputWord)) {
            setResultString(`Great job! You found the pangram: ${inputWord}.`);
            return true;
        } else if (
            beeSolutions.includes(inputWord) &&
            !userGuesses.includes(inputWord)
        ) {
            setResultString(`Great job! You found the solution: ${inputWord}.`);
            return true;
        } else if (
            beeSolutions.includes(inputWord) &&
            userGuesses.includes(inputWord)
        ) {
            setResultString(`You have already guessed ${inputWord}.`);
            return false;
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
                getSolutionPoints(spellingBee, inputWord).then(
                    (answerPoints) => {
                        getCurrentUser().then((currUser) => {
                            addGuess(
                                currUser,
                                spellingBee,
                                answerPoints,
                                inputWord
                            );
                            setUserPoints(userPoints + answerPoints);
                            setUserGuesses([...userGuesses, inputWord]);
                        });
                    }
                );
            });
        }

        setShowResult(true);

        setInputWord("");
        // Reset input word after submitting
    };

    const circleContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "350px",
        height: "350px",
        position: "relative",
        borderRadius: "50%",
        background: "#FFF",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // A subtle shadow around the circle
    };

    const letterButtonStyle = (angle) => ({
        position: "absolute",
        transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`, // This places the buttons in a circle
        width: "70px", // Size of the buttons
        height: "70px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
    });

    const centerLetterStyle = {
        ...letterButtonStyle(0), // This resets any rotation on the center letter
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // This centers the button
    };

    return (
        <div className="flex flex-col lg:flex-row mx-auto max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="p-8 sm:p-10 lg:flex-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div
                        style={circleContainerStyle}
                        className="mx-auto lg:mx-0"
                    >
                        {/* Render the center letter */}
                        <button
                            type="button"
                            style={centerLetterStyle}
                            value={centerLetter}
                            onClick={handleClick}
                            className="bg-bee-yellow hover:bg-bee-yellow-dark text-black rounded-full text-sm font-semibold focus:outline-none focus:ring"
                        >
                            {centerLetter}
                        </button>
                        {/* Render the surrounding letters */}
                        {beeLetters.map((letter, index) => {
                            // Exclude the center letter from this map
                            if (letter !== centerLetter) {
                                const angle = (360 / beeLetters.length) * index;
                                return (
                                    <button
                                        key={letter}
                                        type="button"
                                        style={letterButtonStyle(angle)}
                                        value={letter}
                                        onClick={handleClick}
                                        className="bg-slate-200 hover:bg-slate-300 text-black rounded-full text-sm font-semibold focus:outline-none focus:ring"
                                    >
                                        {letter}
                                    </button>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="text-center">
                        <input
                            type="text"
                            value={inputWord}
                            onChange={handleInputChange}
                            placeholder="Type or click"
                            className="mt-4 mb-2 caret-yellow-500 w-full border-0 bg-transparent text-black text-center placeholder:text-gray-400 focus:ring-0 text-lg"
                        />
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="px-8 py-2 border-2 border-slate-200 bg-white text-black rounded-full text-sm font-semibold"
                            >
                                Delete
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-2 border-2 border-slate-200 bg-white text-black rounded-full text-sm font-semibold"
                            >
                                Enter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md">
                <div className="lg:h-full rounded-2xl bg-white ring-1 ring-inset ring-gray-200 lg:flex lg:flex-col">
                    <div className="p-8 text-left">
                        <ProgressBar
                            progress={userPoints}
                            total={totalPoints}
                            userPoints={userPoints}
                        />
                        <ResultInput
                            showResult={showResult}
                            resultString={resultString}
                        />
                        {userPoints < totalPoints ? (
                            <div className="text-base font-semibold text-gray-600 pb-3 ">
                                You have found {userGuesses.length}{" "}
                                {userGuesses.length === 1 ? "word" : "words"}.
                                Score: {userPoints}
                            </div>
                        ) : (
                            <div className="text-base font-semibold text-gray-600 pb-3 ">
                                You have found all possible words! You won!
                            </div>
                        )}
                        {userGuesses.map((guess, index) => (
                            <div
                                key={index}
                                className="text-base font-semibold text-gray-600"
                            >
                                {guess}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordInput;
