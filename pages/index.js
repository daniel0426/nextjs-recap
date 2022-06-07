
import { useState,useEffect } from 'react';
import Seo from '../components/Seo'

const API_KEY = 'c30fe742ccc79f6b58fb868aa5677088';

export default function Home(){
  const [movies, setMovies] = useState();
  
  useEffect(()=> {
  (async()=> {
    const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular/api_key=${API_KEY}`)).json();
    setMovies(results);
  })()
  
}, [])
  return (
    <div>
    <Seo title="Home"/>
    {!movies && <h4>Loading...</h4>}
      <h1>{movies?.map(movie => <div key={movie.id}>
        <h4>{movie.original_title}</h4>
      </div>)}</h1>
    </div>
  )
}