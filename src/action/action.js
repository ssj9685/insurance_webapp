// action type
const SET_BANK = 'SET_BANK';
const SET_ACCOUNT = 'SET_ACCOUNT';
const SET_NAME = 'SET_NAME';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREVIOUS_PAGE';
const SET_SIGN = 'SET_SIGN';

// action creators
const setBank = bank => {
    return { type: SET_BANK, bank};
}

const setAccount = account => {
    return { type: SET_ACCOUNT, account};
}

const setName = name => {
    return { type: SET_NAME, name};
}

const setSign = sign => {
	return { type: SET_SIGN, sign};
}

function nextPage(){
	return { type: NEXT_PAGE}
}

function prevPage(){
	return { type: PREV_PAGE}
}

export  {
	SET_NAME,
	SET_ACCOUNT,
	SET_BANK,
	SET_SIGN,
	NEXT_PAGE,
	PREV_PAGE,
	setBank,
	setAccount,
	setName,
	setSign,
	nextPage,
	prevPage,
}