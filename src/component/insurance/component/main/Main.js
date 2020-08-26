import React from 'react';
import './Main.css';
import {connect} from 'react-redux';
import {Bank, Info, Agree, Sign, Complete} from './component/Component';

class Main extends React.Component{
    render(){
        switch(this.props.page){
            case 1:
                return(
                    <div className='Main'>
                        <Bank
                            bank={this.props.bank}
                            account={this.props.account} 
                            name={this.props.name}
                        />
                    </div>
                );
            case 2:
                return(
                    <div className='Main'>
                        <Info/>
                    </div>
                );
            case 3:
                return(
                    <div className='Main'>
                        <Agree/>
                    </div>
                );
            case 4:
                return(
                    <div className='Main'>
                        <Sign sign={this.props.sign}/>
                    </div>
                );
            case 5:
                return(
                    <div className='Main'>
                        <Complete/>
                    </div>
                );
            default:
                return(
                    <div className='Main'>
                        Main
                    </div>
                );
        }
    }
}
let stateToProps = (state) => {
    return {
        bank: state.bankReducer.bank,
        account: state.bankReducer.account,
        name: state.bankReducer.name,
        page: state.pageReducer.page,
        sign: state.signReducer.sign,
    };
}

Main = connect(stateToProps)(Main);

export default Main;