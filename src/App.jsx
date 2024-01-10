import { useState, useEffect } from "react";
import InputWord from "./components/InputWord";
import Result from "./components/Result";
import InputLetter from "./components/InputLetter";
import CheckAnswer from "./components/CheckAnswer";
import Figure from "./components/Figure";

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

  useEffect(() => {
    if (wrongGuessesCounter == 6) {
      setIsGameStart(false);
    }
    if (!maskedEnteredWord.includes("_")) {
      setIsGameStart(false);
    }
  }, [wrongGuessesCounter, maskedEnteredWord]);

  if (!isWordEntered) {
    return (
      <>
        {!isGameStart && <button onClick={onStartGame}>Play</button>}
        {isGameStart && (
          <>
            {" "}
            <InputWord
              enteredWord={enteredWord}
              setEnteredWord={setEnteredWord}
              onEnterWord={onEnterWord}
            />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <div className="game-container">
        {" "}
        <Figure wrongGuessesCounter={wrongGuessesCounter} />
      </div>
      {isGameStart && (
        <>
          <CheckAnswer
            maskedEnteredWord={maskedEnteredWord}
            wrongGuesses={wrongGuesses}
            wrongGuessesCounter={wrongGuessesCounter}
          />
          <InputLetter
            enteredLetter={enteredLetter}
            setEnteredLetter={setEnteredLetter}
            onEnterLetter={onEnterLetter}
          />
        </>
      )}
      <Result
        wrongGuessesCounter={wrongGuessesCounter}
        maskedEnteredWord={maskedEnteredWord}
        enteredWord={enteredWord}
        playAgain={onPlayAgain}
      />
    </>
  );
}

export default App;
