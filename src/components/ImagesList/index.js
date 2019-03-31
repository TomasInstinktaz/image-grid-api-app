import React from 'react';
import './index.css';

// urls is "full, raw, regular, small, thumb"
const ImagesListItem = ({ image }) => (
    <div className="col-sm-4">
        <img className="img-responsive" alt={image.alt_description} src={image.urls.regular} />
    </div>
)

const ImagesList = (props) => {
   return (
        <div className="row">
           {props.list.map(image => (
               <ImagesListItem image={image} key={image.id}/>
           ))}
         </div>
   )
}

export default ImagesList;
