import { useState } from "react";
import axios from "axios";
import { Form } from "./Form";
import { RhymesResult } from "./RhymesResult";

export function RhymesSearch() {
  const [rhymes, setRhymes] = useState([]);
  function searchRhyme(
    event,
    input
  ) {
    event.preventDefault();
    console.log("input", input);
    axios
      .get(`https://api.datamuse.com/words?rel_rhy=${input}`)
      .then((apiData) => {
        setRhymes(apiData.data);
      });
  }
  return (
    <>
      <Form searchRhyme={searchRhyme} setRhymes={setRhymes} />
      <RhymesResult rhymes={rhymes} setRhymes={setRhymes} />
    </>
  )
}