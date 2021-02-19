import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './searchByRating.css'

export default function SearchByRating({setRating,rating}) {
 

  return (
    <div>
      <Box className='rating' mb={3} >
        <Rating 
        tranparent
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box> 
      </div>
  )
        }