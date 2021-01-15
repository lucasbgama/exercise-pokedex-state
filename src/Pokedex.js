import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button.js';
import './Pokedex.css';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: 'All',
            position: 0,
        };
        this.changePosition = this.changePosition.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.pokemonsFilterType = this.pokemonsFilterType.bind(this);
    }

    changePosition() {
        const length = this.pokemonsFilterType().length;
        this.setState((state, _props) => ({
            position: (state.position + 1) % length,
        }));
    }

    changeFilter(event) {
        const type = event.target.innerText;
        this.setState({ filter: type, position: 0 });
    }

    pokemonsFilterType() {
        const pokemons = this.props.pokemons;
        return pokemons.filter(
            (pokemon) => this.state.filter === 'All' || pokemon.type === this.state.filter
        );
    }

    render() {
        const types = ['All', ...new Set(this.props.pokemons.map((pokemon) => pokemon.type))];
        const pokemon = this.pokemonsFilterType()[this.state.position]; //this.props.pokemons[this.state.position];

        return (
            <div className="pokedex">
                <Pokemon pokemon={pokemon} />
                <div className="buttons">
                    <Button
                        onClick={this.changePosition}
                        disabled={this.pokemonsFilterType().length === 1}
                        className="next"
                    >
                        Next
                    </Button>
                    <div className="types">
                        {types.map((type) => (
                            <Button
                                key={type}
                                onClick={this.changeFilter}
                                className="type"
                                autoFocus={type === this.state.filter}
                            >
                                {type}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;
