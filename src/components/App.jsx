import { Component } from "react";
import Notiflix from 'notiflix';
import { fetchImages } from "components/Api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from "components/Button/Button";
import './styles.css';



export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    totalHits: 0,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;

    if (prevState.name !== name || prevState.name !== name) {
      try {
        this.setState({ loading: true });

        const { totalHits, hits } = await fetchImages(name, page);
        
        if (totalHits === 0) {
          Notiflix.Notify.info('No image with that name:(');
          this.setState({ loading: false });
          return;
        }

        this.setState(prevState => ({
          images: page === 1 ? hits : [...prevState.images, ...hits],

          totalHits: page === 1 ? totalHits - hits.length : totalHits - [...prevState.images, ...hits].length,
        }));

        this.setState({ loading: false });
      } catch (error) {
        Notiflix.Notify.warning(`Something went wrong! ${error}`);
      }
    }

  
}

  handleFormSubmit = name => {
    this.setState({name})
    console.log(name);
  }
 
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit}/>
       <ImageGallery images={this.state.images}/>
        <Button />
      </div>
    );
  }

};
