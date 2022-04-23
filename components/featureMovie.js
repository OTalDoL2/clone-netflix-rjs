import React from "react";
import './featureMovie.css';
import { VscPlay } from "react-icons/vsc";


export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let firstRelease = new Date(item.release_date);
    let genres = [];

    for (let i in item.genres) {
        genres.push( item.genres[i].name);
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.title} </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        {/* <div className="featured--year" >{firstDate.getFullYear()}</div> */}
                        <div className="featured--release" >{firstRelease.getFullYear()}</div>
                        {/* <div className="featured--seasons" >{item.number_of_season} temporada{item.number_of_season !== '1' ? 's' : ''}</div>  */}
                    </div>
                    <div className="featured--description"> {item.overview} </div>
                    <div className="featured--buttons" >
                        <a href={`/watch/${item.id}`} className="featured--watchbutton"> <VscPlay /> Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--addlist">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gênero:</strong> {genres.join(', ')}</div>
                </div>    
            </div>
        </section>
    )
}