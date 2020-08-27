import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function configureStore(reducer,
	initialState = {
		bankState = {
			bank:'',
			account:'',
			name:'',
		},
		
		pageState = {
			page:1,
		},
		
		signState = {
			sign:'',
		},
		
		agreeState = {
			collect:false,
			lookUp:false,
		},
	})
	{
		const enhancer = compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		);
		return createStore(reducer, initialState, enhancer);
	}