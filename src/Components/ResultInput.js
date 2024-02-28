const ResultInput = ({ dictResult, inputResult, getResult, inputWord }) => {
    return (
        <div>
            <h5>The word you inputted: {inputWord}</h5>
            <h5>{getResult(dictResult, inputResult)}</h5>
        </div>
    );
};

export default ResultInput;