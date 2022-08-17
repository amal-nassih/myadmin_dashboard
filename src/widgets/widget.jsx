import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './widget.scss';

const widget  = ({ type }) => {
        let data;

        switch(type){
            case "user" : data = {
                title : "USERS",
                isMoney:false,
                link: "See all users",
                icon :<PersonOutlineIcon className="icon" style={{ color:"crimson" , backgroundColor: "rgba(255,0,0,0.2)" }} />
            }
            break;

            case "order" : data = {
                title : "ORDERS",
                isMoney:false,
                link: "View all orders",
                icon :<ShoppingCartIcon className="icon" style={{ color:"goldenrod" , backgroundColor: "rgba(218,165,32,0.2)" }}/>
            }
            break;

            case "earning" : data = {
                title : "EARNINGS",
                isMoney:true,
                link: "View net earnings",
                icon :<MonetizationOnIcon className="icon" style={{ color:"green" , backgroundColor: "rgba(0,255,0,0.2)" }}/>
            }
            break;

            case "balance" : data = {
                title : "BALANCE",
                isMoney:true,
                link: "See details",
                icon :<AccountBalanceWalletIcon className="icon" style={{ color:"purple" , backgroundColor: "rgba(128,0,128,0.2)" }}/>
            }
            break;

            default: break;
        }

        // just for the view
        const amount = 100;
        const diff = 10;

        return (
            <div className="widget">
                  <div className="left">
                    <div className="title">{data.title}</div>
                    <div className="counter">{data.isMoney && '$'}{amount}</div>
                    <div className="link">{data.link}</div>
                  </div>

                  <div className="right">
                    <div className="pourcentage positive">
                        <ArrowDropUpIcon/>
                            {diff}%
                    </div>
                    {data.icon}
                  </div>
            </div>


        );
}

export default widget;