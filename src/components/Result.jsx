const Result = ({
  wrongGuessesCounter,
  maskedEnteredWord,
  enteredWord,
  playAgain,
}) => {
  if (wrongGuessesCounter == 5) {
    return (
      <>
        <h1>{[...enteredWord].join(" ")}</h1>
        <h2>Nisi pogodio zadanu riječ! Pokušaj ponovo!</h2>
        <button onClick={() => playAgain()}>Play again</button>
      </>
    );
  }

  if (!maskedEnteredWord.includes("_")) {
    return (
      <>
        <h1>{[...enteredWord].join(" ")}</h1>
        <h2>Čestitam! Pogodio si zadanu riječ!</h2>
        <button onClick={() => playAgain()}>Play again</button>
      </>
    );
  }
};

export default Result;
