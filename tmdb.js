const API_KEY = 'ba65e81015f7d9b8e2de28df5e6743cf';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
-original
-recomendado
-em alta
-ação
-comedia
-terror
-romance
-docs
*/

const basicFetch = async (endpoint) =>  {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default { 
    getHomeList: async () => {
        return[
            {
                slug: 'originals', //
                title: 'Originais do ne',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'trending', //
                title: 'Recomendados pra vc',
                items: await basicFetch(`/trending/all/week?&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'toprated', //
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'action', //
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'comedy', //
                title: 'comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'horror', //
                title: 'terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'romance', //
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            },
            {
                slug: 'documentary', //
                title: 'Docs',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`) //lista dos filmes nessa class
            }
        ]
    }
}