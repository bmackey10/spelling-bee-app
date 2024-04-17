// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ProgressBar = ({ progress, total, userPoints }) => {
    const percent = (progress / total) * 100;

    return (
        <div class="relative px-5 py-10">
            <div class="rounded-lg h-1 w-full bg-gray-300">
                <div
                    class="transition-all ease-out duration-1000 flex h-full items-center justify-center rounded-lg bg-bee-yellow text-xs leading-none"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-between">
                {percent > 0 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 12.5 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 12.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 25 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 25 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 37.5 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 37.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 50 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 50 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 62.5 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 62.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 75 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 75 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 87.5 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 87.5 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {percent < 100 && progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
                {percent >= 100 ? (
                    <div class="h-5 w-5 text-xs content-center text-center rounded-full bg-bee-yellow">
                        {progress}
                    </div>
                ) : (
                    <div class="h-5 w-5 rounded-full bg-gray-300"></div>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
