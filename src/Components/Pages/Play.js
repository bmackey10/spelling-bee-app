import { useState, useEffect } from "react";
import { getAllSpellingBees } from "../Services/SpellingBees.js";
import BeeList from "./BeeList";
import SpellingBeeCardIcon from "../../Icons/spelling-bee-card-icon.svg";

/* Users can choose which spelling Bee they'd like to play from the list generated */
const Play = () => {
    const [spellingBees, setSpellingBees] = useState([]);

    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllSpellingBees()
            .then((spellingBees) => {
                setSpellingBees(spellingBees);
            })
            .catch((error) => {
                console.error("Error fetching spelling bees:", error);
            });
    }, []);

    return (
        <div className="bg-white py-12 sm:py-16 px-16 sm:px-32 xl:px-48 overflow-hidden h-4/6 sm:h-5/6">
            <div className="mx-auto max-w-7xl border-2 border-black rounded-lg p-2 h-full">
                <div className="flex mx-auto max-w-7xl border-0 rounded-lg shadow-2xl bg-bee-yellow h-full">
                    <div className="flex flex-col justify-center text-center mx-auto max-w-2xl gap-y-1 sm:gap-y-2 p-5 sm:p-10">
                        <img
                            className="h-16 w-auto"
                            src={SpellingBeeCardIcon}
                            alt=""
                        />
                        <h2 className="text-5xl font-bold text-black font-zilla-slab">
                            Spelling Bee Puzzles
                        </h2>
                        {spellingBees.length > 0 && (
                            <BeeList spellingBees={spellingBees} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Play;
