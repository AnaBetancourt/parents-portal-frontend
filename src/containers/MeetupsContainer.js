import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Meetup from '../components/meetups/Meetup'
import MeetupForm from '../components/meetups/MeetupForm'

class MeetupsContainer extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <MeetupForm />
                        </Col>
                    </Row>
                    <Row>
                        <Meetup />
                    </Row>
                </Container>
            </>
        )
    }
}

export default MeetupsContainer