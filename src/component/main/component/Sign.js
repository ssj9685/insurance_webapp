import React from 'react';
import ReactDOM from 'react-dom';

class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startX: 0,
            startY: 0,
            isDown: false,
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.draw = this.draw.bind(this);
    }

    render(){
        return(
            <canvas id="canvas" ref="canvas"
            style={{
                border:"1px solid"
            }}
            onDoubleClick={
                e => {
                    let nativeEvent = e.nativeEvent;
                    this.handleDoubleClick(nativeEvent);
                }
            }
            onMouseDown={
                e => {
                    let nativeEvent = e.nativeEvent;
                    this.handleMouseDown(nativeEvent);
                }
            }
            onMouseMove={
                e => {
                    let nativeEvent = e.nativeEvent;
                    this.handleMouseMove(nativeEvent);
                }
            }

            onMouseUp={
                e => {
                    let nativeEvent = e.nativeEvent;
                    this.handleMouseUp(nativeEvent);
                }
            }
            />
        );
    }
    draw(curX, curY) {
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        var context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.state.startX, this.state.startY);
        context.lineTo(curX, curY);
        context.stroke();
    }
    handleMouseDown(event){    
        this.setState({
            startX: event.offsetX,
            startY: event.offsetY,
            isDown: true
        });
    }
    handleMouseMove(event){
        if(!this.state.isDown) return;
        this.draw(event.offsetX, event.offsetY);
        this.setState({
            startX:event.offsetX,
            startY:event.offsetY,
        });
    }

    handleMouseUp(){
        this.setState({
            isDown: false
        })
    }

    handleDoubleClick(){
        const canvas = ReactDOM.findDOMNode(this.refs.canvas);
        console.log(canvas.toDataURL())
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
    }
}

export default Sign;