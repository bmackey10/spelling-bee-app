const ResultInput = ({ showResult, resultString }) => {

    // need to figure out how to check if the word doesn't use the correct letters

    if (showResult) {
        return (
            <div className="text-base font-semibold text-gray-600">
                <p>{resultString}</p>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
};

export default ResultInput;