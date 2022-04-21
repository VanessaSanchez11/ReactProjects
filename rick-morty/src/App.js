import "./App.css";
import imagenRickMorty from "./img/rick-morty.png";
import React, { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character/");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characterApi)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* si si hay characters que muestre componente, si no que muestre img y button */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img
              src={imagenRickMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
