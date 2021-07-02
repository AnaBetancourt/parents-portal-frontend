import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Meetup from '../components/meetups/Meetup'
import MeetupForm from '../components/meetups/MeetupForm'
import {connect} from 'react-redux'
import {fetchMeetups} from '../actions/MeetupActions'

class MeetupsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchMeetups()
    }

    renderMeetups(){
        return this.props.meetups.map(m => {
            return <Row key={m.id}><Meetup
                key={m.id}
                id={m.id}
                title={m.title}
                date={m.date}
                time={m.time}
                location={m.location}
                description={m.description}
                interested_count={m.interested_count}
                buttonHandler={this.handleInterest}
            /></Row>
        })
    }

    handleInterest = (e) => {
        const meetupId = e.target.id
        console.log(meetupId)
    }


    render(){
        return(
            <>
                <Container>
                    <Row>
                        <MeetupForm />
                    </Row>
                    {this.renderMeetups()}
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

export default connect (mapStateToProps, {fetchMeetups})(MeetupsContainer)