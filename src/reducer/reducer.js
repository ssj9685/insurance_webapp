import actions from '../action/index';
import {combineReducers} from 'redux';

const {
        SET_NAME,
        SET_BANK,
        SET_ACCOUNT,
        SET_SIGN,
        NEXT_PAGE,
        PREV_PAGE,
        AGREE_COLLECT,
        AGREE_LOOKUP,
    } = actions.action;

const bankState = {
    bank:'',
    account:'',
    name:'',
}

const pageState = {
    page:1,
}

const signState = {
    sign:'',
}

const agreeState = {
    collect:false,
    lookUp:false,
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

const pageReducer = (state=pageState,action)=>{
    switch(action.type){
        case NEXT_PAGE:
            if(state.page<5){
                return {
                    ...state,
                    page: state.page + 1
                };
            }
            else{return state;}
        case PREV_PAGE:
            if(state.page>1){
                return {
                    ...state,
                    page: state.page - 1
                };
            }
            else{return state;}
        default:
            return state
    }
}

const signReducer = (state=signState,action) => {
    switch(action.type){
        case SET_SIGN:
            return{
                ...state,
                sign:action.sign,
            }
        default:
            return state
    }
}

const agreeReducer = (state=agreeState,action) => {
    switch(action.type){
        case AGREE_COLLECT:
            return{
                ...state,
                collect:action.agree,
            }
        case AGREE_LOOKUP:
            return{
                ...state,
                lookUp:action.agree
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    bankReducer,
    pageReducer,
    signReducer,
    agreeReducer,
})

export default reducers;