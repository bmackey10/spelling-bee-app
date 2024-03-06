import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white py-12 sm:py-16 px-16 sm:px-32 xl:px-48 overflow-hidden h-5/6">
      <div className="flex mx-auto max-w-7xl border-0 rounded-lg shadow-2xl bg-bee-yellow h-full">
        <div className="flex flex-col justify-center text-center mx-auto max-w-2xl gap-y-2 p-10">
          <h2 className="text-5xl font-bold text-black font-zilla-slab">Spelling Bee</h2>
          <p className="text-xl tracking-tight text-black sm:text-2xl font-zilla-slab">
            How many words can you make with 7 letters?
          </p>
          <div className="pt-4">
            <Link to="/play">
              <button type="button" className="border-2 border-black bg-black hover:bg-bee-yellow text-white hover:text-black rounded-full px-8 py-2 text-sm font-semibold shadow-sm">Play</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}