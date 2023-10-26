import React from 'react'
import Card from 'react-bootstrap/Card';

function Mycard() {
  return (
    <Card bg='dark' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='text-primary'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Card.Body>
    </Card>
  )
}

export default Mycard