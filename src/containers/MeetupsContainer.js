import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Meetup from '../components/meetups/Meetup'
import MeetupForm from '../components/meetups/MeetupForm'
import {connect} from 'react-redux'
// import {} from '../actions/MeetupActions'

class MeetupsContainer extends React.Component{

    componentDidMount(){
        const url = "http://localhost:3001/meetups"

        fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            const data = resp.data
            const meetupArr = []
            
            data.map(d => {
                return meetupArr.push({...d.attributes, id: d.id})
            })

            this.props.renderMeetups(meetupArr)

        })
    }

    renderMeetups(){
        return this.props.meetups.map(m => {
            return <Meetup
                key={m.id}
                id={m.id}
                title={m.title}
                date={m.date}
                time={m.time}
                location={m.location}
                description={m.description}
                interested_count={m.interested_count}
            />
        })
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
                        {this.renderMeetups()}
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meetups: state.meetups.meetups
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderMeetups: (meetups) => dispatch({type: 'RENDER_MEETUPS', payload: meetups})
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(MeetupsContainer)