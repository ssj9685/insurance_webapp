import React from 'react';
import {prevPage} from '../../../action/action';
import {connect} from 'react-redux';    

class BackButton extends React.Component{
    render(){
        return(
            <div style={{
                flex:1,
                backgroundColor:'#255EE1',
                textAlign:'center',
            }
            } onClick={this.props.prev}>
                <p>back</p>
            </div>
        );
    }
}

let dispatchToProps = (dispatch) => {
    return {
        prev: () => dispatch(prevPage())
    }
}

BackButton = connect(undefined, dispatchToProps)(BackButton);

export default BackButton;