import { useState } from "react";
import { bg1, bg2, bg3, bg4 } from "./assets/images";
import randomIndex from "./helpers/index-random.js";
import phrases from "../phrases.json";
import "./App.css";

const images = [bg1, bg2, bg3, bg4];

function App() {

  const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
  const [image, setImage] = useState(images[randomIndex(images.length)]);

  console.log(phrases.length);


  function changePhrase () {
    setPhrase(phrases[randomIndex(phrases.length)]);
    setImage(images[randomIndex(images.length)]);
  }

  return (
    <div className='app__container' style={{ backgroundImage: `url('${image}')`}}>
      <div className="title__container">
        <h1>Galletas de la <br/> Fortuna</h1>
      </div>
      <div className="cookie_container">
        <p className="phrase">{phrase.phrase}</p>
        <p className="author"><b>{phrase.author}</b></p>
      </div>
      <button onClick={changePhrase} className="app__button">Otra!</button>
      {/* <pre>
        {JSON.stringify(phrases, null, 2)}
      </pre> */}
    </div>
  )
}

export default App
