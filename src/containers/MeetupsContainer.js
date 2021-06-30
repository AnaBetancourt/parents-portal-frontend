import React from 'react' 
import Meetup from '../components/meetups/Meetup'
import MeetupForm from '../components/meetups/MeetupForm'

class MeetupsContainer extends React.Component{
    render(){
        return(
            <div>
                <MeetupForm />
                <Meetup />
            </div>
        )
    }
}

export default MeetupsContainer