// App.tsx
import { useState } from "react";
import Confetti from "react-confetti";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [confetti, setConfetti] = useState(false);

  const handleClick = () => {
    setShow(!show);
    setButtonVisible(false);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 300000); // confetti will disappear after 3 seconds
  };

  return (
    <>
      {buttonVisible && (
        <button className="btn" title="Button" onClick={handleClick}>
          Click me!
        </button>
      )}

      {show && (
        <div className="bday-body popin">
          <h1 className="bday">Happy Birthday, Mama Jennifer!</h1>
          <p>
            We love and appreciate you. We hope you enjoy your day. God bless
            you, and padayun sa pagka maayo nimo ma. Laban lang!
          </p>
        </div>
      )}

      {confetti && <Confetti />}
    </>
  );
}

export default App;
