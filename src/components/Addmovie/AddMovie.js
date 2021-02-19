import React,{ useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap' 
import './AddMovie'


function AddMovie({addMovie}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [stars, setStars] = useState('')
    const [description, setDescription] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <span className="addMovie" onClick={handleShow}>
        [ + ] 
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Film name" onChange={(e)=>setName(e.target.value)} />
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Image" onChange={(e)=>setImage(e.target.value)} />
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Film type" onChange={(e)=>setType(e.target.value)} />
    <Form.Label>Date</Form.Label>
    <Form.Control type="Number" placeholder="Date" min='1960' max='2021' onChange={(e)=>setDate(e.target.value)}  />
    <Form.Label>Stars</Form.Label>
    <Form.Control type="number" placeholder="Number of stars" min={1} max={5} onChange={(e)=>setStars(e.target.value)}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addMovie({id:Math.random(),name,image,type,date, rating:stars ,description})}>
              Add movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default AddMovie