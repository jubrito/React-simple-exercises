import "../../index.css";
import React from "react";
export function RhymesResult({ rhymes, setRhymes }) {
  function removeRhyme(event, index) {
    event?.preventDefault();
    const updatedRhymes = rhymes.filter((rhyme) => {
      if (rhyme.word !== index) {
        return rhyme;
      }
    });
    setRhymes(updatedRhymes);
  }

  return (
    <>
    <div
      className="result"
      style={{ display: rhymes.length > 0 ? "block" : "none" }}
    >
      <h2>Rhymes</h2>
      <ul>
        {rhymes.map((rhyme) => (
          <li key={rhyme.word}>
            {rhyme.word}
            <button onClick={(event) => removeRhyme(event, rhyme.word)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
