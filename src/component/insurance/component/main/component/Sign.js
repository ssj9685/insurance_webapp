import React from 'react';
import {setSign} from 'action/action';
import {connect} from 'react-redux';

class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startX: 0,
            startY: 0,
            isDown: false,
        }
        this.canvas = React.createRef();
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.draw = this.draw.bind(this);
    }

    componentDidMount(){
        var context = this.canvas.current.getContext("2d");
        var img = new Image();
        img.src = this.props.sign;
        img.onload = ()=>{
            context.drawImage(img,0,0);
        };
    }
    

    render(){
        return(
            <div style={{display:"flex",flexDirection:"column"}}>
            <canvas ref={this.canvas}
            style={{
                border:"2px solid #255EE1",
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

            onMouseOut={
                e => {
                    let nativeEvent = e.nativeEvent;
                    this.handleMouseOut(nativeEvent);
                }
            }
            />
            <div style={{margin:'2em',fontFamily:'helvetica',color:'gray', textAlign:'center'}}>탭을 두번하면 지워집니다</div>
            </div>
        );
    }
    draw(curX, curY) {
        var context = this.canvas.current.getContext("2d");
        context.beginPath();
        context.moveTo(this.state.startX, this.state.startY);
        context.lineTo(curX, curY);
        context.stroke();
    }
    handleMouseDown(event){    
        event.preventDefault();
        this.setState({
            startX: event.offsetX,
            startY: event.offsetY,
            isDown: true
        });
    }
    handleMouseMove(event){
        event.preventDefault();
        if(!this.state.isDown) return;
        this.draw(event.offsetX, event.offsetY);
        this.setState({
            startX:event.offsetX,
            startY:event.offsetY,
        });
    }

    handleMouseUp(event){
        event.preventDefault();
        this.props.setSign(this.canvas.current.toDataURL());
        this.setState({
            isDown: false
        })
    }

    handleMouseOut(event){    
        event.preventDefault();
        this.setState({
            isDown: false
        });
    }

    handleDoubleClick(event){
        event.preventDefault();
        var context = this.canvas.current.getContext("2d");
        context.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
        this.props.setSign('none');
        context.beginPath();
    }
}

let dispatchToProps = (dispatch) => {
    return {
        setSign: sign => dispatch(setSign(sign)),
    }
}

Sign = connect(undefined, dispatchToProps)(Sign);

export default Sign;