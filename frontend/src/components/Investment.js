import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Investment = ({investment}) => {
  return (
    <Card className='m-3 p-3 rounded' style={{ width: '22rem' }}>
      <Link to={`/investments/${investment._id}`}>
        <Card.Img 
        className='card-img-top' 
        as='img'  
        src={`https://res.cloudinary.com/dequo8fxt/image/upload/v1632501483/${investment.images[0]}`} variant='top'/>
      </Link>
      <Card.Body>
        <Link to={`/investments/${investment._id}`}>
          <Card.Title as= 'div'>
            <strong> {investment.name} Farm </strong>
          </Card.Title>
        </Link>
        <Card.Text as='p'>Location: {investment.description} </Card.Text>
        <Card.Text as='p'>Price: {investment.price} </Card.Text>
        <Card.Text as='p'>Unit available: {investment.units} </Card.Text>
        <Card.Text as='p'>Closing date: {investment.paymentClosingDate} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Investment