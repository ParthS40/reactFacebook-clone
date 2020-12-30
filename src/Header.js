import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";

function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="Header">
        
            <div className="header_left">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/600px-Facebook_Home_logo_old.svg.png"></img>
            <div className="header_input">
                <SearchIcon />
                <input type="text" placeholder="Search Facebook"></input>
            </div>
            </div>

            <div className="header_middle">
            <div className="header__option--active">

                <HomeIcon fontSize="large"></HomeIcon>
            </div>
            <div className="header__option">

                <FlagIcon fontSize="large"></FlagIcon>
            </div>
            <div className="header__option">

                <SubscriptionsIcon fontSize="large"></SubscriptionsIcon>
            </div>
            <div className="header__option">

                <StorefrontOutlinedIcon fontSize="large"></StorefrontOutlinedIcon>
            </div>
            <div className="header__option">

                <SupervisedUserCircleOutlinedIcon fontSize="large"></SupervisedUserCircleOutlinedIcon>
            </div>
            </div>

            <div className="header_right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
            </div>
        </div>
    );
}

export default Header;
