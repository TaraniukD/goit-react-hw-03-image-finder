import React from "react";

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';



export const ImageGallery = ({images}) => {
   
    return (
        <ul className="ImageGallery">
            {images.map(({ id, webformatURL, largeImageURL, tags}) => {
        return (
            <ImageGalleryItem 
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}/>
            );
            })}
      </ul> 
    )
}