import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Modal from './Modal'


function Nav({setSearch,setValue,valuee,handleDataa,setDataa}) {

  
    
    
   
  const [data, setData] = useState([{}]);
  const handleData = (data) => {
    setData(data);
    
  };

    handleDataa({data})
    setDataa(data)
  
    
     
  
  
  
 
  



   
    return (
        
        <div className='nav'>
        
            <label>lawej w estamta3</label>
            <input type='text' placeholder='search' onChange={e=>setSearch(e.target.value)} />
            <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={valuee}
          onChange={(event,newValue)=>{
               setValue(newValue)
               
          }}
        />
    
      </Box>
      <Modal handleData={handleData}/>
    
        </div> 
    )
}

export default Nav
