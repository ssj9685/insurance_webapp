import React from 'react';

const buttonStyle={
    height:"3em",
    width:"8em",
    margin:"0.5em",
    padding:"0.5em",
    color:"white",
    backgroundColor:"#003AB6",
    border:"none",
    outline:"none",
}

class Camera extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.videoTag = React.createRef()
        this.canvas = React.createRef()
    }
    componentDidMount(){
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'enviroment'
            }})
        .then(stream => this.videoTag.current.srcObject = stream)
    }
    render(){
        return(
            <div style={{
                width:'100%',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                alignItems:'center',
                }}>
                <div style={{flex:'1',textAlign:'center',color:'#255EE1',font:'normal bold 2em helvetica',display:'flex',alignItems:'center'}}>처방전을 비춰주세요</div>

                <div style={{flex:'3',}}>
                    <video ref={this.videoTag} autoPlay/>
                    <canvas style={{display:'none'}} ref={this.canvas} width="0" height="0"/>
                </div>

                <div style={{
                    flex:'2',
                    width:'50%',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    }}>
                    <input style={buttonStyle} type="button" value="CAPTURE" onClick={this.handleClick}/>
                    <input style={buttonStyle} type="button" value="RESET" onClick={this.handleReset}/>
                    <input style={buttonStyle} type="button" value="NEXT" onClick={this.handleReset}/>
                </div>
            </div>
        )
    }
    handleClick(){
        //this.canvas.current.width = this.videoTag.current.videoWidth
        //this.canvas.current.height = this.videoTag.current.videoHeight

        this.canvas.current.width = this.videoTag.current.videoWidth
        this.canvas.current.height = this.videoTag.current.videoHeight

        this.videoTag.current.style.display = 'none'
        this.canvas.current.style.display = 'block'

        var context = this.canvas.current.getContext('2d');

        const track = this.videoTag.current.srcObject.getVideoTracks()[0];
        let imageCapture = new ImageCapture(track);

        imageCapture.takePhoto()
        .then(blob => createImageBitmap(blob))
        .then(imageBitmap => {
            context.drawImage(imageBitmap,0,0,this.canvas.current.width,this.canvas.current.height);

            //to send png file
            //console.log(canvas.toDataURL())
        })
    };

    handleReset(){
        this.videoTag.current.style.display = 'block'
        this.canvas.current.width = 0
        this.canvas.current.height = 0
    }
}

export default Camera;