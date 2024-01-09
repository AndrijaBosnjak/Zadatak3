const InputWord = ({ enteredWord, setEnteredWord, onEnterWord }) => {
  return (
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
  );
};

export default InputWord;
