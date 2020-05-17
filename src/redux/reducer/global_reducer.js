import ActionTypes from '../actiontypes/global';

const global_state = {
    menu_collapsed : false,
    current_menu: 1
}

const globalReducer = (state = global_state, action = {}) => {
    if(action.type === ActionTypes.LAYOUT_COLLAPSED){
        return {
            ...state,
            menu_collapsed: !state.menu_collapsed
        }
    }

    if(action.type === ActionTypes.CURRENT_ROUTE){
        return{
            ...state,
            current_menu: action.route_key
        }
    }

    if(action.type === "LOGGED_USER"){
        return{
            ...state,
            logged_user: action.payloads
        }
    }

    return state
}

export default globalReducer