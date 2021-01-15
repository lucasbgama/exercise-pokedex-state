import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     pokemonsFilter: pokemons,
  //   };
  //   this.pokemonsFilterType = this.pokemonsFilterType.bind(this);
  // }

  // pokemonsFilterType(event) {
  //   const type = event.target.innerText;
  //   this.setState((state, _props) => ({
  //     pokemonsFilter: pokemons.filter((pokemon) => ( type === 'All' || pokemon.type === type)),
  //   }));
  // }

  render() {
    // const types = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
        {/* {types.map((type) => ( */}
        {/*   <button key={type} onClick={this.pokemonsFilterType}> */}
        {/*     {type} */}
        {/*   </button> */}
        {/* ))} */}
      </div>
    );
  }
}

export default App;
