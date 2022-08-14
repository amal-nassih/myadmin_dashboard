import React from "react";
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LogoutIcon from '@mui/icons-material/Logout';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar  = () => {
   
        return (
            <div className="sidebar">

<div className="top">
                   <span className="logo">myadmin</span>
                  
                </div>
                <hr />
                <div className="center">
                  <ul>
                    <p className="title">Main</p>
                    <li><DashboardIcon className="icon"/>
                    <span> Dashboard</span></li>

                    <p className="title">Lists</p>
                    <li><PeopleAltIcon className="icon"/>
                    <span> Users</span></li>

                    <li><CollectionsBookmarkIcon className="icon"/>
                    <span> Products</span></li>

                    <li><FilterFramesIcon className="icon"/>
                    <span> Orders</span></li>

                    <p className="title">Useful</p>
                    <li><AirportShuttleIcon className="icon"/>
                    <span> Delivery</span></li>

                    <li><QueryStatsIcon className="icon"/>
                    <span> Stats</span></li>
                    
                    <li><NotificationsActiveIcon className="icon"/>
                    <span> Notifications</span></li>

                    <p className="title">Service</p>
                    <li><MonitorHeartIcon className="icon"/>
                    <span> System Health</span></li>

                    <li><TextSnippetIcon className="icon"/>
                    <span> Logs</span></li>

                    <li><SettingsIcon className="icon"/>
                    <span> Settings</span></li>

                    <p className="title">User</p>
                    <li><AccountCircleIcon className="icon"/>
                    <span> Profile</span></li>

                    <li><LogoutIcon className="icon"/>
                    <span> Logout</span></li>
                   
                  </ul>
                </div>
                <div className="bottom">
                    <div className="colorOption"></div>
                    <div className="colorOption"></div>
                </div>
                
            </div>
        );
}

export default Sidebar;