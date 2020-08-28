// action type
const SET_BANK = 'SET_BANK';
const SET_ACCOUNT = 'SET_ACCOUNT';
const SET_NAME = 'SET_NAME';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREVIOUS_PAGE';
const SET_SIGN = 'SET_SIGN';
const SET_PERMISSION = 'SET_PERMISSION';
const AGREE_COLLECT = 'AGREE_COLLECT';
const AGREE_LOOKUP = 'AGREE_LOOKUP';

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

const setPermission = permission => {
	return { type: SET_PERMISSION, permission};
}

const agreeCollect = agree => {
	return { type:AGREE_COLLECT,agree}
}

const agreeLookUp = agree => {
	return { type:AGREE_LOOKUP,agree}
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
	SET_PERMISSION,
	NEXT_PAGE,
	PREV_PAGE,
	AGREE_COLLECT,
	AGREE_LOOKUP,
	setBank,
	setAccount,
	setName,
	setSign,
	setPermission,
	nextPage,
	prevPage,
	agreeCollect,
	agreeLookUp,
}