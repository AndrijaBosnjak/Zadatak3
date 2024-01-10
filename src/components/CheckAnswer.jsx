const CheckAnswer = ({
  maskedEnteredWord,
  wrongGuessesCounter,
  wrongGuesses,
}) => {
  return (
    <>
      <h1>{maskedEnteredWord}</h1>
      <h3>Broj netočnih pokušaja : {wrongGuessesCounter} / 6</h3>
      <p>Krivi odgovori: {wrongGuesses.join(" , ")} </p>
    </>
  );
};

export default CheckAnswer;
