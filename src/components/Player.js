import React, { Component } from 'react';
import { connect } from 'react-redux'

class Player extends Component {


  render() {
    const { category, movie, name } = this.props;
    return (
      <section className="video">
        <h1>{ category.name }</h1>
        <section>
          <video width="420" height="315" controls>
            <source src="movie-mp4" type="video/mp4" />
            your browser does not support the video tag.
          </video>
        </section>
        <h3>
          { movie.title }
          { ' ' }
          { movie.released }
        </h3>
        <p>{ name }</p>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    movie: state.movieReducer.movieSelected,
    category: state.movieReducer.categorySelected,
    name: state.reducerName.name,
  }
}

export default connect(mapStateToProps)(Player);
