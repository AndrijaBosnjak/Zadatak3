import { useState } from "react";

import "./App.css";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [isWordEntered, setIsWordEntered] = useState(false);
  const [enteredLetter, setEnteredLetter] = useState("");
  const [wrongAttemptCounter, setWrongAttemptCounter] = useState(0);

  const onStartGame = () => {
    setIsGameStart(true);
  };

  const onEnterWord = (event) => {
    console.log(enteredWord);
    // const lettersArray = [...enteredWord];
    // const lettersArrayLength = lettersArray.length;
    // console.log(lettersArray, lettersArrayLength);
    setIsWordEntered(true);
  };

  const onEnterLetter = (event) => {
    console.log(enteredLetter);
    setEnteredLetter("");
  }

  if (!isWordEntered) {
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
      </>
    );
  }

  return (
    <>
      <h3>Broj netočnih pokušaja :{" "}{wrongAttemptCounter}</h3>
      <p>Unesi jedno slovo:</p>
      <p>{[...enteredWord].fill("_").join(" ")}</p>
      <form>
        <input
          type="text"
          id="word"
          name="word"
          placeholder="dozvoljena su samo slova"
          value={enteredLetter}
          onChange={(e) => setEnteredLetter(e.target.value)}
        />
      </form>
      <button onClick={onEnterLetter}>PROVJERI</button>
    </>
  );
}

export default App;
