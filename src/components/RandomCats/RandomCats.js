import { MainControls } from "./MainControls"
import { CatsList } from "./CatsList"
import { useState } from "react";
export function RandomCats() {
  const [randomCats, setRandomcats] = useState([]);
    return (
        <>
            <MainControls setRandomcats={setRandomcats}/>
            <CatsList randomCats={randomCats} setRandomcats={setRandomcats}/>
        </>
    )
}