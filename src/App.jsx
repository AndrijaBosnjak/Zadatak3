import { useState } from "react";

import "./App.css";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [isWordEntered, setIsWordEntered] = useState(false);

  const onStartGame = () => {
    setIsGameStart(true);
  };

  const onEnterWord = (event) => {
    console.log(enteredWord);
    setEnteredWord("");
    setIsWordEntered(true);

    return 
  };

  return (
    <>
      {!isGameStart && <button onClick={onStartGame}>Play</button>}
      {isGameStart && (
        <>
          <p>Unesi riječ od najmanje 3 slova:</p>
          <form>
            <input
              type="text"
              id="word"
              name="word"
              placeholder="dozvoljena su samo slova"
              value={enteredWord}
              onChange={(e) => setEnteredWord(e.target.value)}
            />
          </form>
          <button onClick={onEnterWord}>UNESI</button>
        </>
      )}

      {isWordEntered && <p>Broj netočnih pokušaja:</p>}
    </>
  );
}

export default App;
