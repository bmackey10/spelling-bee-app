import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/current">Today's Spelling Bee</Link>
        </li>
        <li>
          <Link to="/past">Previous Spelling Bees</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;