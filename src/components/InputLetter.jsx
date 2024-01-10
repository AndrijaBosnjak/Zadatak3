const InputLetter = ({ enteredLetter, setEnteredLetter, onEnterLetter }) => {
  return (
    <>
      <form>
        <input
          type="text"
          id="word"
          name="word"
          placeholder="upiši jedno slovo"
          value={enteredLetter}
          onChange={(e) => setEnteredLetter(e.target.value)}
        />
      </form>
      <button onClick={onEnterLetter}>PROVJERI</button>
    </>
  );
};

export default InputLetter;
