import React from "react";
import Search from "./components/search";

const App = () => {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner"/>
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassel</h1>
        </header>

        <Search />
      </div>
    </main>
  )
}

export default App;
