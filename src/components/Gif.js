import React from 'react';
import GifCard from './GifCard';

const Gif = (props) => {
    const gifResults = props.gifs.map((image) => {
        return <GifCard key={image.id} gif={image} />
    });

    return (
        <div className= "gif-container">
        	{gifResults}
        </div>
    );
};

export default Gif;