import React from 'react';
import Signin from 'component/common/Signin'
import Camera from './component/Camera'
import {connect} from 'react-redux';

const defaultStyle = {
    visibility:'hidden',
}

const failStyle = {
    visibility:'visible',
    color: 'red',
}

class Dashboard extends React.Component{
    render(){
        switch(this.props.permission){
            case true:
                return(
                    <Camera/>
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

Dashboard = connect(stateToProps)(Dashboard);

export default Dashboard;