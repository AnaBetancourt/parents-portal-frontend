import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Meetup from '../components/meetups/Meetup'
import MeetupForm from '../components/meetups/MeetupForm'
import {connect} from 'react-redux'

class MeetupsContainer extends React.Component{

    renderMeetups = () => {
    
    }


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

const mapStateToProps = (state) => {
    return {
        meetups: state.meetups
    }
}

export default connect (mapStateToProps)(MeetupsContainer)