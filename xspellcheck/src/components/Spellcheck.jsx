import { useEffect, useState } from "react";

const Spellcheck = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const [userInput, setUserInput] = useState("");
  const [spellwrong, setSpellworng] = useState(false);
  const [wrongword, setWrongWord] = useState("");
  //   useEffect(() => {
  //     if (userInput) {

  //     }
  //   }, [userInput]);
  const handleChange = (e) => {
    setUserInput(e.target.value);
    let a = userInput.split(" ");
    let correctwords = a.map((word) => {
      const correctword = customDictionary[word.toLowerCase()];
      return correctword || word;
    });

    const displayWord = correctwords.find((word, idx) => {
      return word != a[idx];
    });
    setWrongWord(displayWord || "");
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
