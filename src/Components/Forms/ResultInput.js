const ResultInput = ({ beeSolutions, inputWord, getResult }) => {
    return (
        <div className="text-base font-semibold text-gray-600">
            <p>The word you inputted: {inputWord}</p>
            <p>{getResult(beeSolutions, inputWord)}</p>
        </div>
    );
};

export default ResultInput;