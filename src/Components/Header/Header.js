import { Link } from "react-router-dom";
import SpellingBeeCardIcon from "../../Icons/spelling-bee-card-icon.svg";

/* Links to home page or list of possible spelling bees */
const Header = () => (

  <header className="bg-bee-yellow">
    <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 justify-center flex flex-row items-center gap-x-1">
          <h1 className="text-xl font-zilla-slab">Mary and Brooke's Spelling Bee</h1>
          <img className="h-6 w-auto" src={SpellingBeeCardIcon} alt="" />
        </Link>
    </nav>
  </header>

);

export default Header;