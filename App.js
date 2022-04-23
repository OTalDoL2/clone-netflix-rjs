import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow.js';
import './App.css';
import FeatureMovie from './components/featureMovie';
import Header from './components/header/index';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      //pegar a lista 
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Pegar Feature
      let originals = list.filter(i => i.slug === 'comedy');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie');
      setFeatureData(chosenInfo);
      console.log(chosenInfo)
    }
    loadAll();
  }, []);

  useEffect (() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }
      else
      setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);
  return (
    <div className='page'>

      <Header black={blackHeader} />

    {featureData &&
      <FeatureMovie item={featureData} />
    }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração"> ❤️ </span> pelo @L2.Ramos 🔥 <br/>
        Créditos principais para o TheMovieDatabase (fonte dos daos) e Bonieky Lacerda (professor e youtuber).
      </footer>
    </div>
  )
}