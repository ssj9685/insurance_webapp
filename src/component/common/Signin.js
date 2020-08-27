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

class Signin extends React.Component{
    constructor(props){
        super(props)
        this.form = React.createRef();
        this.submitInfo = this.submitInfo.bind(this);
    }
    submitInfo(){
        let fd = new FormData(this.form.current);
        let data = {};
        for (let [key, prop] of fd) {
          data[key] = prop;
        }
        fetch('http://localhost:9060/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => data.text())
        .then(data =>  { console.log(data) }) 
        .catch((err) => {
            console.error(err);
        })
    }
    render(){
        return(
            <form ref={this.form} action="" method="POST" style={formStyle}>
                <h1 style={{color:"white"}}>Sign-in</h1>
                <input style={inputStyle} name="id" placeholder="ID"/>
                <input style={inputStyle} name="pw" placeholder="PW"/>
                <input style={submitStyle} type="button" value="sign-in" onClick={this.submitInfo}/>
            </form>
        )
    }
}

export default Signin;