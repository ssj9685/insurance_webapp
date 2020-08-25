import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div style={{height:"100%",display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
                <input style={{width:"50%"}} placeholder="id"/>
                <input style={{width:"50%"}} placeholder="pw"/>
            </div>
        )
    }
}

export default Login;