import React from 'react';

//base64 encoded pdf file
import data from './claim'

class Info extends React.Component{
    render(){
        return(
            <object data={data} type="application/pdf" width="100%" height="100%">INFO</object>
        );
    }
}

export default Info;