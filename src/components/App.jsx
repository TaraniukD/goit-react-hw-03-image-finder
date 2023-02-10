import { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from "components/Button/Button";

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar />
        <ImageGallery />
        <Button/>
      </div>
    );
  }

};
