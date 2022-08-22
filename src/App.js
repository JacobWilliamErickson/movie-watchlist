import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import './App.css';
import MovieScreen from './components/MovieScreen';





function App() {


  const [movieList, setMovieList] = useState([])

  const [watchList, setWatchList] = useState([])

  const [page, setPage] = useState(1)

  useEffect(() => {
    getData();
  }, [page]);


  const getData = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
         movieList={movieList}
         page={page}
         setPage={setPage}
         watchList={watchList}/>
      </main>
    </div>
  );
}

export default App;
