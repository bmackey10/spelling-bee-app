const ResultInput = ({ beeSolutions, inputWord, getResult }) => {
    return (
        <div>
            <h5>The word you inputted: {inputWord}</h5>
            <h5>{getResult(beeSolutions, inputWord)}</h5>
        </div>
    );
};

export default ResultInput;