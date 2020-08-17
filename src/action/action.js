// action type
const SET_BANK = 'SET_BANK';
const SET_ACCOUNT = 'SET_ACCOUNT';
const SET_NAME = 'SET_NAME';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREVIOUS_PAGE'

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
	NEXT_PAGE,
	PREV_PAGE,
	setBank,
	setAccount,
	setName,
	nextPage,
	prevPage,
}