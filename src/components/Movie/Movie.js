import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }


    render() {
        return (
            <div>
                <h1 className="title">DETAIL OF THE MOVIE</h1>
                <img className="poster" src={this.props.movies.Poster} alt="Img not found"/>
                <h2 className="detTittle">{`${this.props.movies.Title}`}</h2>
                <div className="movie-detail">
                <h4>{`YEAR: ${this.props.movies.Year}`}</h4>
                <h4>{`DURATION: ${this.props.movies.Runtime}`}</h4>
                <h4>{`CAST: ${this.props.movies.Actors}`}</h4>
                <h4>{`DIRECTOR: ${this.props.movies.Director}`}</h4>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    }
}
function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);