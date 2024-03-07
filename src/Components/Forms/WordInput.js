import { useState } from "react";
import ResultInput from "./ResultInput.js";

/*
- handles the word inputted by the user (either by text input or button clicks)
- checks if the word inputted by the user is one of the associated bee solutions
*/

const WordInput = ({ beeLetters }) => {
    const [inputWord, setInputWord] = useState("");
    const [dictResult, setDictResult] = useState([]);
    const [inputResult, setInputResult] = useState(null);

    function getResult(dictResult, inputResult) {
        if (dictResult && dictResult.length > 0 && inputResult) {
        return "Great job! You found a word.";
        } else if (inputResult && !dictResult) {
        return "This word does not exist in the dictionary.";
        } else if (inputResult === false) {
        return "This word does not use the correct letters.";
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setInputWord(inputWord.concat(e.target.value));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setInputResult(
    //     inputWord
    //         .split("")
    //         .reduce(
    //         (accumulator, letter) => accumulator && beeLetters.includes(letter),
    //         true
    //         )
    //     );
    //     getWord(inputWord).then((result) => {
    //     setDictResult(result);
    //     });
    // };

    // const handleChange = (e) => {
    //     setInputWord(e.currentTarget.value);
    // };

// Originally had ButtonInput pulled out into component and used in Spelling.js
// BUT realized needed to keep it here for button interaction (for now??)
// Now Spelling.js is a bit empty looking

return (
    <div>
        <div>{beeLetters.map((letter) => (<button type="button" className="bg-slate-200 hover:bg-slate-300 text-black hover:text-black rounded-full px-2 py-2 text-sm font-semibold" value={letter} onClick={handleClick}>{letter}</button>))}</div>
        <form /*onSubmit={handleSubmit}*/>
            <input type="text" value={inputWord} /*onChange={handleChange}*/ />
            <input type="submit" value="Submit"/>
        </form>
        <ResultInput dictResult={dictResult} inputResult={inputResult} getResult={getResult} inputWord={inputWord}/>
    </div>
);
};

export default WordInput;