import {Component} from "react";
import Notiflix from 'notiflix';




export class Searchbar extends Component {

    state = {
        name: ''
    };

    searchImage = e => {
        this.setState({name: e.currentTarget.value.toLowerCase()});
    };

    imageSubmit = e => {
        e.preventDefault();

        if (this.state.name.trim() === '') {
            Notiflix.Notify.info('Enter the name of the image!');
            return;
        }

        this.props.onSubmit(this.state.name);
        this.setState({name: ''});
    };

render() {
    return (
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.imageSubmit}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.name}
              onChange={this.searchImage}
            />
              <button type="submit" className="SearchForm-button">
              <span className="Button-label">Search</span>
            </button>
          </form>
        </header>
            )
}
  
}