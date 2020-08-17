import React from 'react';
import './Footer.css'
import { nextPage} from '../../action/action';
import {connect} from 'react-redux';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer" onClick={this.props.next}>
                <p>다음</p>
            </div>
        );
    }
}

let dispatchToProps = (dispatch) => {
    return {
        next: () => dispatch(nextPage())
    }
}

Footer = connect(undefined, dispatchToProps)(Footer);

export default Footer;