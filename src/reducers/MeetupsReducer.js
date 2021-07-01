export default function MeetupsReducer(state={meetups: []}, action){
    switch(action.type){
        case 'RENDER_MEETUPS':
            return {...state, meetups: action.payload}
        default: 
            return state
    }
}