import React from 'react';

const GifCard = (image) => {
    return (
        <div className="gif-card">
            <img src={image.gif.images.fixed_width.url} alt="" />
        </div>
    )
};

export default GifCard;