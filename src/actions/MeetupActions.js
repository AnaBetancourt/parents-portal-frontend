const url = "http://localhost:3001/meetups"

export const loadMeetups = (meetups) => ({type: 'LOAD_MEETUPS', payload: meetups})
export const addMeetup = (meetup) => ({type: 'ADD_MEETUP', payload: meetup})

export const fetchMeetups = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            const data = resp.data
            const meetupArr = []
            
            data.map(d => {
                return meetupArr.push({...d.attributes, id: d.id})
            })
    
            dispatch(loadMeetups(meetupArr))
        })
    }
}

export const createMeetup = (meetup) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(meetup)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(resp => {
            const newMeetup = {id: parseInt(resp.data.id), ...resp.data.attributes}
            dispatch(addMeetup(newMeetup))
        })
    }
}