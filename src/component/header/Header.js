import React from 'react';
import './Header.css'
import { BackButton, ExitButton, PageTitle } from './component/Component';

const Header = ()=>{
    return(
        <div className="Header">
            <BackButton/>
            <PageTitle/>
            <ExitButton/>
        </div>
    );
}

export default Header;