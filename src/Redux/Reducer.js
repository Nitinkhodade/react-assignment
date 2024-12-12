import { ADD_SERVER, DELETE_SERVER, FAIL_REQUEST, GET_SERVER_LIST, GET_SERVER_OBJ, MAKE_REQUEST, UPDATE_SERVER } from "./ActionType"
 
const initialstate = {
    loading: true,
    serverlist: [],
    serverobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_SERVER_LIST:
            return {
                loading: false,
                errmessage: '',
                serverlist:action.payload,
                serverobj:{}
            }
            case DELETE_SERVER:return{
                ...state,
                loading:false
            }
            case ADD_SERVER:return{
                ...state,
                loading:false
            }
            case UPDATE_SERVER:return{
                ...state,
                loading:false
            }
            case GET_SERVER_OBJ:return{
                ...state,
                loading:false,
                serverobj:action.payload
            }
        default: return state
    }
}