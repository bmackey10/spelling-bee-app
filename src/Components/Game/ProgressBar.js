// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ProgressBar = ({ progress, total, userPoints }) => {
    const percent = (progress / total) * 100;

    return (
        <div class="relative px-5 py-10">
            {/* <div class="absolute inset-0 grid grid-flow-row content-start justify-items-end" style={{ width: `${percent + 2}%` }}>
                <div className="text-center text-sm">{userPoints}</div>
                <ChevronDownIcon
                    className="h-4 w-4 stroke-gray-300 "
                    aria-hidden="true"
                />
            </div> 
            Could be used to show score above progress bar
            */}
            <div class="rounded-lg h-1 w-full bg-gray-300">
                <div
                    class="transition-all ease-out duration-1000 flex h-full items-center justify-center rounded-lg bg-bee-yellow text-xs leading-none"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-between">
                {percent > 0 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {0}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 12.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.125 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 25 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.25 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 37.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.375 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 50 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.5 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 62.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.625 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 75 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.75 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 87.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {(0.875 * total).toFixed(0)}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 100 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {total}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
