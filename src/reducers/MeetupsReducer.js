export default function MeetupsReducer(state={meetups: []}, action){
    switch(action.type){
        case 'LOAD_MEETUPS':
            return {...state, meetups: action.payload}
        default: 
            return state
    }
}