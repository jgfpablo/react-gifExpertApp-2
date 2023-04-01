import React from "react";
import "../index.css";

const GifGridItem = ({ img, title, url }) => {
    return (
        <div className="Items">
            <img className="imagen" src={url} alt={title} />
            <h1>{title}</h1>
        </div>
    );
};

export default GifGridItem;
