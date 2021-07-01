const url = "http://localhost:3001/meetups"

export const renderMeetups = (meetups) => ({type: 'RENDER_MEETUPS', payload: meetups})

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
    
            dispatch(renderMeetups(meetupArr))
        })
    }
}

