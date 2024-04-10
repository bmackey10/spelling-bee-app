const ProgressBar = ({ progress, total }) => {

    const percent = progress/total * 100;

    return (
        <div class="relative px-5 py-10">
            <div class="rounded-lg h-1 w-full bg-gray-300">
                <div class="flex h-full items-center justify-center rounded-lg bg-bee-yellow text-xs leading-none" style={{ width: `${percent}%`}}></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-around">
                {percent >= 12.5 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 25 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 37.5 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 50 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 62.5 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 75 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 87.5 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
                {percent >= 100 ? (<div class="h-4 w-4 rounded-full bg-bee-yellow"></div>) : (<div class="h-4 w-4 rounded-full bg-gray-300"></div>)}
            </div>
        </div>
    );
};

export default ProgressBar;