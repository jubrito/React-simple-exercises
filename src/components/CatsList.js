export function CatsList({randomCats, setRandomcats}) {
    function removeCat(event, catUrl) {
        event.preventDefault();
        console.log('randomCats',randomCats)
        const updatedRandomCats = randomCats.filter(randomCat => {
          if (randomCat.url !== catUrl) {
            console.log('randomCat',randomCat)
            console.log('catUrl',catUrl)
            return randomCat
          }
        })
        console.log('updatedRandomCats',updatedRandomCats)
        setRandomcats(updatedRandomCats);
    }

    return (
        <ul className="catsList">
        {randomCats && randomCats.map(randomCat => 
          <li key={randomCat.url}>
            <img width="400" height="400" src={randomCat.url} alt="" />
            <button onClick={(event) => removeCat(event, randomCat.url)}> Remove cat</button>
          </li>
        )}
      </ul>
    )
}