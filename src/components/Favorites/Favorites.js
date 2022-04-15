import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//importo la action removeMovieFavorite
import { removeMovieFavorite } from "../../actions"
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="title">FAVORITE MOVIES</h2>
        <ul className="fav">
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map((movie) => {
            return (
              <div className="favDiv" key={movie.id}>
                <Link className="link" to= {`/movie/${movie.id}`}>{movie.title.toUpperCase()}</Link>
                <button className="btn" onClick={() => this.props.removeMovieFavorite(movie.id)}>DELETE</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);