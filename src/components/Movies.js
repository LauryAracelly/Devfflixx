import React from 'react';

class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          nombre: props.title,
          genero: props.genres,
        }
    }

    render() {
        return (
            <div>
              <img src={ this.state.imagen } alt=""/>
              <h4>Nombre: { this.state.nombre }</h4>
              <p>Genero: { this.state.genero }</p>
            </div>
        );
    }
}

export default Movie;