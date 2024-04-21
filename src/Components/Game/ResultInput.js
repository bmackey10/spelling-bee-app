const ResultInput = ({ showResult, resultString, isPangram }) => {
    // need to figure out how to check if the word doesn't use the correct letters

    if (showResult) {
        if (isPangram){
            return (
                <div className={`absolute top-4 left-1/2 transform -translate-x-[calc(65%-10px)] px-4 py-2 rounded-sm 
                ${showResult ? 'bg-bee-yellow text-black' : 'text-gray-500'} text-sm font-semibold`}>
                {resultString}
                </div>
            );
        } else {
            return (
                <div className={`absolute top-4 left-1/2 transform -translate-x-[calc(65%-10px)] px-4 py-2 rounded-sm 
                ${showResult ? 'bg-black text-white' : 'text-gray-500'} text-sm font-semibold`}>
                {resultString}
                </div>
            );
        }
    } else {
        return <div></div>;
    }
};

export default ResultInput;
