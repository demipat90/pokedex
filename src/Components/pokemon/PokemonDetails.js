import React, { Component } from 'react';

class PokemonDetails extends Component {

  componentDidMount() {
    this.props.getPokemon(this.props.match.params.id);
  }

  render() {
    const { name, abilities, types, sprites } = this.props.details;
    return (
      <div>
        {name}
        { (abilities) && (
          <>
          {abilities.map(item => {
            return (
              <div key={item.slot}>{item.ability.name}</div>
            )
          })}
          </>
        )}
        { (types) && (
          <>
          {types.map(item => {
            return (
              <div key={item.slot}>{item.type.name}</div>
            )
          })}
          </>
        )}
        { (sprites) && (
          <>
            <img src={sprites.back_default} alt="back sprite" />
            <img src={sprites.front_default} alt="front sprite" />
          </>
        )}
      </div>
    )
  }
}

export default PokemonDetails;
