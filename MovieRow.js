import React from "react";
import './MovieRow.css';

export default ({title, items}) => {  
    return (
        <div>
            <h2> {title} </h2>
            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, key) => (
                    console.log('aaaaaaa')
                    //<img key={key} scr={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt={item.original_title} />
                ))}
            </div> 
        </div>
    );
}