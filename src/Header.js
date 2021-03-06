import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
    const history = useHistory();
    return (
        <div class="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}><ArrowBackIcon fontSize="large" className="header_icon" /></IconButton>
            ) : (
                    <IconButton><PersonIcon className="header__icon" fontSize="large" /></IconButton>
                )}
            <Link to="/">
                <img src="https://icon2.cleanpng.com/20180622/pwy/kisspng-cercanas-bilbao-zorrotza-renfe-operadora-cercan-tinder-5b2d1716c16048.0838255415296816867921.jpg" alt="Tinder logo" className="header__logo" />
            </Link>
            <Link to={{ pathname: "/chat" }}>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
