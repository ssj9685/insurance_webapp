import React from 'react';
import Signin from 'component/common/Signin'
import {connect} from 'react-redux';

const defaultStyle = {
    visibility:'hidden',
}

const failStyle = {
    visibility:'visible',
    color: 'red',
}

class Panel extends React.Component{
    render(){
        switch(this.props.permission){
            case true:
                return(
                    <>hi</>
                )
            case false:
                return(
                    <Signin style={failStyle}/>
                )
            default:
                return(
                    <Signin style={defaultStyle}/>
                )

        }
    }
}

let stateToProps = (state) => {
    return {
        permission: state.permissionReducer.permission,
    };
}

Panel = connect(stateToProps)(Panel);

export default Panel;