import React from 'react';

class Camera extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.videoTag = React.createRef()
        this.canvas = React.createRef()
    }
    componentDidMount(){
        navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => this.videoTag.current.srcObject = stream)
    }
    render(){
        return(
            <>
            <div>처방전을 비춰주세요</div>
            <video ref={this.videoTag} autoPlay/>
            <canvas ref={this.canvas}/>
            <button
                ref="button"
                onClick={
                    e => { this.handleClick(e);}
                }
            >
                Capture
            </button>
            </>
        )
    }
    handleClick(event){
        event.preventDefault();
        this.canvas.current.width = this.videoTag.current.videoWidth
        this.canvas.current.height = this.videoTag.current.videoHeight

        this.videoTag.current.style.display = 'none'

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
}

export default Camera;