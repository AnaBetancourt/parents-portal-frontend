import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Meetup({id, title, date, time, location, description, interested_count, buttonHandler}){
    return(
        <div>
        <Container>
            <Row>
                <h1>{title}</h1>
            </Row>
            <Row>
                <h4>{date} | {time}</h4>
            </Row>
            <Row>
                <h5>{location}</h5>
            </Row>
            <Row>
                <p>{description}</p>
            </Row>
            <Row>
                <Col><Button id={id} onClick={buttonHandler} variant="info" size="sm">Show Interest</Button></Col>
                <Col><h6>{interested_count} families are interested in this meetup</h6></Col>
            </Row>
        </Container>
        <hr />
        </div>
    )
}