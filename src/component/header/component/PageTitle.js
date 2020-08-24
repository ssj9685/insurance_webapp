import React from 'react';
import { connect } from 'react-redux';

const styles = {
    flex:10,
    backgroundColor:'#255EE1',
    textAlign:'center',
}

const Title = (props)=>{
    return(
        <div style={styles}>
            <p>{props.title}</p>
        </div>
    );
}

class PageTitle extends React.Component{
    render(){
        switch(this.props.value){
            case 1:
                return <Title title='보험금 지급 계좌'/>
            case 2:
                return <Title title='문서 확인'/>
            case 3:
                return <Title title='보험금 청구를 위한 필수 동의서'/>
            case 4:
                return <Title title='서명'/>
            case 5:
                return <Title title='청구 완료'/>
            default:
                return <Title title='main'/>
        }
    }
}

let stateToProps = (state) => {
    return {
        value: state.pageReducer.value
    };
}

PageTitle = connect(stateToProps)(PageTitle);

export default PageTitle;