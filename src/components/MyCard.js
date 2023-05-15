import React from 'react'
import Card from 'react-bootstrap/Card';
import './components/img.css'

const MyCard = (props) => {
  return (
        <Card className='col-sm-6'>
        <Card.Img variant="top" src={props.img} className='card-img'/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                I'm {props.nickname} from {props.place} <br></br>
            <Card.Link className='btn btn-light' href={props.iglink}>Instagram</Card.Link>
            </Card.Text>
        </Card.Body>
        </Card>
  )
}

export default MyCard