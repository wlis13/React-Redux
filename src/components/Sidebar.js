import React, { Component } from 'react';
import date from '../date';
import categories from '../date';
import { connect } from 'react-redux';
import selectMovie from '../Redux/action';
import selectName from '../Redux/action/actionName';


class Sidebar extends Component {
  constructor () {
    super();
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    this.setState({ categories: date })
  }

  render() {
    const name = 'Wlisses';
    const { dispatch } = this.props
    return (
      <aside>
        { categories.map((category) => (
          <section key={ category.id }>
            <h3>{ category.name }</h3>
            <ul>
              { category.movies.map((movie) => (
                <li
                  key={ movie.id }
                  role="presentation"
                  onClick={ () => dispatch(selectMovie(category, movie)) }

                >
                  { movie.title }
                  { ' ' }
                  { ' ' } -- { ' ' }foi lançado em
                  { ' ' }
                  { movie.released }
                </li>
              )) }
            </ul>

          </section>
        ))
        }
        <button
          type="button"
          onClick={ () => dispatch(selectName(name)) }
        >
          Name
        </button>

      </aside>
    );
  }
}

export default connect()(Sidebar);