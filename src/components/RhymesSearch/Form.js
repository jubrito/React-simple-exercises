import React from "react";
import "../../index.css";
import { useState } from "react";
export function Form({ searchRhyme, setRhymes }) {
  const [input, setInput] = useState("");

  function findInput(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function clearAll(
    event
  ) {
    event.preventDefault();
    setRhymes([]);
    setInput("");
  }

  return (
    <>
      <h1>Search for rhymes</h1>
      <form>
        <input
          type="text"
          placeholder="Type a rhyme"
          onChange={findInput}
          value={input}
        />
        <div className="buttons">
          <button
            className="button-primary"
            onClick={(event) => searchRhyme(event, input)}
            disabled={!input}
          >
            Search
          </button>
          <button
            className="button-secondary"
            onClick={(event) => clearAll(event)}
            disabled={!input}
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
}
