import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import'../Movie/style.css'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal= ({handleData})=> {
  
 
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name&&type&&date&&rating&&description ) {
      handleData( {name,type,date,rating,description} );
      setName(name)
      setType(type)
      setDate(date);
      setRating(rating);
      setDescription(description)
    } else {
      alert("fields shouldnt be empty");
    }
  };
 

  const body = (
    <form onSubmit={handleSubmit}>
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2> 
      <label>name</label>
     <input  value={name} onChange={(e) => setName(e.target.value)}></input>    
     <br/> 
     <label>type</label>
     <input value={type} onChange={(e) => setType(e.target.value)}></input>    
     <br/>
     <label>date</label>
     <input value={date} onChange={(e) => setDate(e.target.value)}></input>    
     <br/>
     <label>description</label>
     <input value={description} onChange={(e) => setDescription(e.target.value)}></input> 
     <br/>   
     <label>rating</label>
     <input value={rating} onChange={(e) => setRating(e.target.value)}></input>  <br/>  
     <button onClick={handleSubmit}>addtomovielist</button>
    </div>
 
    </form>
    
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}


export default SimpleModal
