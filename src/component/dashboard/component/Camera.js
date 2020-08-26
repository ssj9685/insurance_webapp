import React from 'react';
import ReactDOM from 'react-dom';

class Camera extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.videoTag = React.createRef()
    }
    componentDidMount(){
        navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => this.videoTag.current.srcObject = stream)
    }
    render(){
        return(
            <>
            <video ref={this.videoTag} autoPlay/>
            <button
                ref="button"
                onClick={
                    e => {
                        let nativeEvent = e.nativeEvent;
                        this.handleClick(nativeEvent);
                    }
                }
            >
                Capture
            </button>

            <canvas
                ref="canvas"
                width='640'
                height='480'
            />
            </>
        )
    }
    handleClick(event){
        event.preventDefault();

        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        var context = canvas.getContext('2d');

        const track = this.videoTag.current.srcObject.getVideoTracks()[0];
        let imageCapture = new ImageCapture(track);

        imageCapture.takePhoto()
        .then(blob => createImageBitmap(blob))
        .then(imageBitmap => {
            context.drawImage(imageBitmap,0,0,canvas.width,canvas.height);
        })
    };
}

export default Camera;