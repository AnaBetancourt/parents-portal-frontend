export default function MeetupsReducer(state={meetups: []}, action){
    switch(action.type){
        case 'LOAD_MEETUPS':
            return {...state, meetups: action.payload}
        case 'ADD_MEETUP':
            return {meetups: [...state.meetups, action.payload]}
        case 'INCREASE_INTEREST':
            const newMeetups = state.meetups.map(m => {
                return parseInt(m.id) === action.payload.id ? action.payload : m
            })
            return {meetups: newMeetups}
        default: 
            return state
    }
}