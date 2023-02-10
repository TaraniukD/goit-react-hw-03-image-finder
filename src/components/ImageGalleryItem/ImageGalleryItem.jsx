import React from "react";

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
   
        return (
          
            <li className="ImageGalleryItem">
         <img src={webformatURL} alt={tags}/>
            </li> 
  
        )
}