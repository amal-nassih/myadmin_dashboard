import React from "react";
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

import '../../images/1.jpg';

const Navbar  = () => {
   
        return (
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text"  placeholder="Search..." />
                        <SearchIcon/>
                    </div>

                    <div className="items">
                        <div className="item">
                           <LanguageIcon/>
                           English
                        </div>

                        <div className="item">
                           <NightlightIcon/>
                        </div>

                        <div className="item">
                           <MenuIcon/>
                        </div>

                        <div className="item">
                           <ChatBubbleIcon/>
                           <div className="counter">1</div>
                        </div>

                        <div className="item">
                           <NotificationsIcon/>
                           <div className="counter">2</div>
                        </div>

                       

                        <div className="item">
                           <ZoomInMapIcon/>
                        </div>

                        <div className="item">
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg" alt="admin" srcset="" />
                        </div>
                    </div>
                </div>

            </div>
        );
}

export default Navbar;