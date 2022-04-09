import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow.js';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegar a lista 
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {/* header, destaque, listas e footer */}
      <section className="lists">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}