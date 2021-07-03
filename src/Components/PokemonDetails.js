import React, { Component } from 'react';

class PokemonDetails extends Component {

  componentDidMount() {
    this.props.getPokemon(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        {this.props.data.name}
      </div>
    )
  }
}

export default PokemonDetails;
