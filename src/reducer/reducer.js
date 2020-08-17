import actions from '../action/index';
import {combineReducers} from 'redux';

const {SET_NAME,SET_BANK,SET_ACCOUNT, NEXT_PAGE, PREV_PAGE} = actions.action;

const bankState = {
    bank:'',
    account:'',
    name:'',
}

const bankReducer = (state=bankState, action) => {
    switch(action.type) {
        case SET_BANK:
            return {
                ...state,
                bank: action.bank
            }
        case SET_ACCOUNT:
            return {
                ...state,
                account: action.account
            }
        case SET_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
}

const pageReducer = (state={value:1},action)=>{
    switch(action.type){
        case NEXT_PAGE:
            if(state.value<5){
                return {
                    ...state,
                    value: state.value + 1
                };
            }
            else{return state;}
        case PREV_PAGE:
            if(state.value>1){
                return {
                    ...state,
                    value: state.value - 1
                };
            }
            else{return state;}
        default:
            return state
    }
}

const reducers = combineReducers({
    bankReducer,
    pageReducer,
})

export default reducers;