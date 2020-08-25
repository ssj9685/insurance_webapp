import React from 'react';

const formStyle={
    height:"100%",
    backgroundColor:"#255EE1",
    display:"flex",
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center"
}
const inputStyle = {
    height:"2em",
    width:"50%",
    margin:"0.5em",
    padding:"0.5em",
    border:"none",
    outline:"none",
}

const submitStyle={
    height:"3em",
    width:"35%",
    color:"white",
    backgroundColor:"#003AB6",
    border:"none"
}

class Login extends React.Component{
    render(){
        return(
            <form action="" method="POST" style={formStyle}>
                <h1 style={{color:"white"}}>Sign-in</h1>
                <input style={inputStyle} name="id" placeholder="ID"/>
                <input style={inputStyle} name="pw" placeholder="PW"/>
                <input style={submitStyle} value="Sign in" type="submit"/>
            </form>
        )
    }
}

export default Login;