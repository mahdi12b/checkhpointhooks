import React, { useState } from 'react'
import MovieCard from './MovieCard.js'
import AddMovie from '../Addmovie/AddMovie.js'
import './style.css'




 

  

  

const MovieList = ({moviesData,search,rating,addMovie}) => {




  
return (
       <div className='MovieList'>
         {moviesData
         .filter(movie=>
           movie.name.toLowerCase().includes(search.toLowerCase())
           &&
           movie.rating>=rating
         )
         .map(movie => 
           <MovieCard movie={movie} key={movie.id} addMovie={addMovie}/>    
           )
         }
         <AddMovie addMovie={addMovie}/>
       </div>
)
        }


export default MovieList


/*const filterMoviesRating = moviesData.filter(movie=>{
  return   movie.rating==valuee  
    
})


 

 const filterMoviesSearching = moviesData.filter(movie=>{
   return movie.name.toLowerCase().includes(search.toLowerCase())
 });
 
 
 return (
     <div>
           
     <div className='container MovieList'>
     {filterMoviesSearching.map(movie =>
           <MovieCard movie={movie} key={movie.id} />
           )}
           
        
    
           
           {/*filterMoviesSearching.map(movie => 
           <MovieCard movie={movie} key={movie.id}/>

           )
               
       </div>
       </div>
   )
}
*/