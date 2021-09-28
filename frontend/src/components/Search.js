import React from 'react'
import { Form, Button } from "react-bootstrap";

const Search = () => {
  
  
  return (
    <>
    <Form  action='/' method='get'>
      <Form.Group>
        <Form.Label htmlFor='header-search'><span className='visually-hidden'>Search website</span></Form.Label>
        <Form.Control type="text"
            id="header-search"
            placeholder="Search website"
            name="s"/>
      <Button  type='submit'>Search</Button>
      </Form.Group>

    </Form>
     
    </>
  )
}

export default Search
