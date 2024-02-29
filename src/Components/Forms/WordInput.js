import { useState } from "react";
import { getWord } from "../Services/GetWord.js";
import ResultInput from "./ResultInput.js";

/*
- handles the word inputted by the user (either by text input or button clicks)
- checks if the word inputted by the user exists in the dictionary
- stateful component
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

const handleSubmit = (e) => {
    e.preventDefault();
    setInputResult(
    inputWord
        .split("")
        .reduce(
        (accumulator, letter) => accumulator && beeLetters.includes(letter),
        true
        )
    );
    getWord(inputWord).then((result) => {
    setDictResult(result);
    });
};

const handleChange = (e) => {
    setInputWord(e.currentTarget.value);
};

// Originally had ButtonInput pulled out into component and used in Spelling.js
// BUT realized needed to keep it here for button interaction (for now??)
// Now Spelling.js is a bit empty looking

return (
    <div>
        <div>{beeLetters.map((letter) => (<button type="button" value={letter} onClick={handleClick}>{letter}</button>))}</div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputWord} onChange={handleChange} />
            <input type="submit" value="Submit"/>
        </form>
        <ResultInput dictResult={dictResult} inputResult={inputResult} getResult={getResult} inputWord={inputWord}/>
    </div>
);
};

export default WordInput;