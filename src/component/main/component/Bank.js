import React from 'react';
import {setBank, setAccount, setName} from '../../../action/action';
import {connect} from 'react-redux';

const formStyles={
    height:'100%',
    width:'50%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around'
}

const inputStyles={
    border:"none",
    borderBottom:"2px solid #2255E1",
    outline:"none",
}

class Bank extends React.Component{
    render(){
        return(
            <div style={formStyles}>
                <input 
                    type='text' 
                    style={inputStyles} 
                    value={this.props.bank} 
                    onChange={e=>this.props.setBank(e.target.value)} 
                    placeholder='은행명'
                />
                <input 
                    type='text' 
                    style={inputStyles} 
                    value={this.props.account} 
                    onChange={e=>this.props.setAccount(e.target.value)} 
                    placeholder='계좌번호'
                />
                <input
                    type='text' 
                    style={inputStyles}
                    value={this.props.name}
                    onChange={e=>this.props.setName(e.target.value)} 
                    placeholder='예금주'
                />
            </div>
        );
    }
}

let dispatchToProps = (dispatch) => {
    return {
        setBank: bank => dispatch(setBank(bank)),
        setAccount: account => dispatch(setAccount(account)),
        setName: name => dispatch(setName(name))
    }
}

Bank = connect(undefined, dispatchToProps)(Bank);

export default Bank;