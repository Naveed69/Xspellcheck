import { useEffect, useState } from "react";

const Spellcheck = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [userInput, setUserInput] = useState("");
  const [wrongword, setWrongWord] = useState("");
  useEffect(() => {
    let a = userInput.split(" ");
    let correctwords = a.map((word) => {
      const correctword = customDictionary[word.toLowerCase()];
      return correctword || word;
    });

    const displayWord = correctwords.find((word, idx) => {
      return word !== a[idx];
    });
    setWrongWord(displayWord || "");
  }, [userInput]);
  const handleChange = (e) => {
    let val = e.target.value;
    setUserInput(val);
  };
  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        onChange={(e) => handleChange(e)}
        value={userInput}
        placeholder="Enter text.."
      />
      <br />
      {wrongword && <>Did you mean: {wrongword}?</>}
    </>
  );
};
export default Spellcheck;
