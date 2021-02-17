
import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar.js'
import  SearchByName  from "../searchByName/SearchByName";
import SearchByRating from '../SearchByRating/SearchByRating.js'
import{ MoviesData }from './MoviesData.js'
import MovieList from '../Movie/MovieList.js'
import Footer from '../Footer/Footer.js'
import './App.css';
const Movies =() => {



const [moviesData , setMoviesData] = useState(MoviesData)
const [search , setSearch] = useState('');
const [rating , setRating] = useState(1);

const addMovie = (newMovie) => {
   setMoviesData([...moviesData, newMovie])
}


  return (
    <div className="Movie">
      <Navbar  />
      <div className='search'>
      <SearchByName className='searchByName' setSearch={setSearch}/>
      <SearchByRating className='searchByRating' setRating={setRating}/>
      </div>
      <MovieList  moviesData={moviesData} search={search}  rating={rating} addMovie={addMovie}  />
      <Footer/>
    </div>
  );
}


export default Movies;



































/*function Movies() {
  const [search , setSearch] = useState('');
  const [valuee, setValue] = React.useState(0);

 
  const [dataa, setDataa] = useState({});

 const handleDataa = (data)=>{
    setDataa(data)
  }



 


  return (
    <div className="Movie">
      <Navbar  />
      <SearchByName/>
      <SearchByRating/>

      <div className='box'>
        <Nav setSearch={setSearch} setValue={setValue} valuee={valuee} handleDataa={handleDataa}setDataa={setDataa}/>
      <MovieList search={search} valuee={valuee} dataa={dataa}   className='MovieList' />
      </div>
      
    </div>
  );
}


export default Movies; */
