import { Link } from "react-router-dom";

const HowToPlay = () => {
    return (
        <div className="bg-white py-12 sm:py-16 px-16 sm:px-32 xl:px-48 h-screen">
            <div className="mx-auto max-w-7xl border-2 border-yellow-300 rounded-lg p-2 h-full">
                <div className="flex mx-auto max-w-7xl border-0 rounded-lg shadow-2xl bg-white h-full">
                    <div className="flex flex-col justify-center mx-auto max-w-2xl gap-y-4 p-5 sm:p-10">
                        <h1 className="text-5xl font-bold text-black font-zilla-slab mb-4">How to Play Spelling Bee</h1>
                        <ul className="list-disc pl-5 space-y-2 text-xl text-black font-zilla-slab">
                            <li>Words must contain at least 4 letters.</li>
                            <li>Words must include the center letter.</li>
                            <li>Our word list does not include words that are obscure, hyphenated, or proper nouns.</li>
                            <li>No cussing either, sorry.</li>
                            <li>Letters can be used more than once.</li>
                        </ul>
                        <h2 className="text-3xl font-bold text-black font-zilla-slab mt-6">Score points to increase your rating:</h2>
                        <ul className="list-disc pl-5 space-y-2 text-xl text-black font-zilla-slab">
                            <li>4-letter words are worth 1 point each.</li>
                            <li>Longer words earn 1 point per letter.</li>
                            <li>Each puzzle includes at least one "pangram" which uses every letter. These are worth 7 extra points!</li>
                        </ul>
                        <p className="mt-4 text-xl text-black font-zilla-slab">
                            Need more solving tips? <a href="https://www.nytimes.com/2021/12/09/crosswords/spellingbee-tips.html" className="text-blue-600 hover:underline">This article</a> can help.
                        </p>
                        <div className="text-center">
                            <Link to="/play">
                                <button
                                    type="button"
                                    className="border-2 border-black bg-black hover:bg-white text-white hover:text-black rounded-full px-8 py-2 text-sm font-semibold"
                                >
                                    Play
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default HowToPlay;

  
