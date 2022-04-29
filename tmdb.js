const API_KEY = 'ba65e81015f7d9b8e2de28df5e6743cf';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) =>  {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default { 
    getHomeList: async () => {
        return[
            {
                slug: 'trending', //
                title: 'Recomendados pra Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'originals', //https://api.themoviedb.org/3/discover/tv?with_network=213
                title: 'Originais do Netflix',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
                //items:await basicFetch(`/person/19292/movie_credits?api_key=${API_KEY}&language=pt-BR`) //lista dos filmes nessa class
            },
            {
                slug: 'toprated', //
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'action', //
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'comedy', //
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'horror', //
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            // { 
            //     slug: 'person', 
            //     title: 'Sandler',
            //     items: await basicFetch(`/person/19292/movie_credits?api_key=${API_KEY}&language=pt-BR`) //lista dos filmes nessa class
            // }
            //https://api.themoviedb.org/3/person/19292?api_key=${API_KEY}
            // { /person/{person_id}/movie_credits
            //     slug: 'romance', //
            //     title: 'Romance',
            //     items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BRbr&api_key=${API_KEY}`) //lista dos filmes nessa class
            // },
            // {
            //     slug: 'documentary', //
            //     title: 'Documentário',
            //     items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) //lista dos filmes nessa class
            // }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);        
                break;
            
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                 break;
            
            }
        }
        return info;
    }

}
 