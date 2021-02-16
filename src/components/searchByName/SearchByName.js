import React,{useState} from 'react'
import './searchByName.css'
import {Form} from 'react-bootstrap'

const SearchByNamee = ({setSearch}) => {
    
    return (
        <div>
                <Form.Control className='InputSearch' type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
        </div>
    )
}

export default SearchByNamee
