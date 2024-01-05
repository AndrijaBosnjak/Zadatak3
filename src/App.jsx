import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [isWordEntered, setIsWordEntered] = useState(false);
  const [enteredLetter, setEnteredLetter] = useState("");
  const [wrongGuessesCounter, setWrongGuessesCounter] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);

  const onStartGame = () => {
    setIsGameStart(true);
  };

  const enteredWordArray = [...enteredWord];

  // const equalsCheck = (enteredWordArray, correctGuesses) => {
  //   return JSON.stringify(enteredWordArray) === JSON.stringify(correctGuesses);
  // };

  const maskedEnteredWord = [...enteredWord]
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  const onEnterWord = (event) => {
    setIsWordEntered(true);
  };

  const onEnterLetter = (event) => {
    if (enteredWord.includes(enteredLetter)) {
      setCorrectGuesses([...correctGuesses, enteredLetter]);
    } else {
      setWrongGuesses([...wrongGuesses, enteredLetter]);
      setWrongGuessesCounter(wrongGuessesCounter + 1);
    }
    setEnteredLetter("");
  };

  const onPlayAgain = () => {
    setIsGameStart(true);
    setEnteredWord("");
    setIsWordEntered(false);
    setWrongGuessesCounter(0);
    setCorrectGuesses([]);
    setWrongGuesses([]);
  };

  const showResults = useMemo(() => {
    if (wrongGuessesCounter == 5) {
      setIsGameStart(false);

      return (
        <>
          <h1>{[...enteredWord].join(" ")}</h1>
          <h2>Popušio si!!</h2>
          <button onClick={() => onPlayAgain()}>Play again</button>
        </>
      );
    }

    }, [wrongGuessesCounter]);

  // const showCorrectResult = () => {
  //   if (!maskedEnteredWord.includes("_")) {
      
  //     return (
  //       <>
  //         <h1>{[...enteredWord].join(" ")}</h1>
  //         <h2>Čestitam!</h2>
  //         <button onClick={() => onPlayAgain()}>Play again</button>
  //       </>
  //     );
  //   }
  // };

  if (!isWordEntered) {
    return (
      <>
        {!isGameStart && <button onClick={onStartGame}>Play</button>}
        {isGameStart && (
          <>
            <h2>Unesi riječ od najmanje 3 slova:</h2>
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
      {isGameStart && (
        <>
          <h1>{maskedEnteredWord}</h1>
          <h3>Broj netočnih pokušaja : {wrongGuessesCounter} / 5</h3>
          <p>Krivi odgovori: {wrongGuesses.join(" , ")} </p>
          <p>Unesi jedno slovo:</p>
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
      )}
      {showResults}
      {!maskedEnteredWord.includes("_") && <p>Pobjedio si!</p>}
      {/* {showCorrectResult} */}
    </>
  );
}

export default App;
