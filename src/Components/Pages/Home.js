import { useNavigate } from "react-router-dom";

/* Try to mimic NYT Spelling Bee home page */
export default function Home() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/play");
  };

  return (
    <section>
      <h1>Spelling Bee</h1>
      <h4>How many words can you make with 7 letters?</h4>
      <button onClick={buttonHandler}>Play</button>
    </section>
  );
}