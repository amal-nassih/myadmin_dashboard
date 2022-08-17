import React from "react";
import './Featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured  = () => {
   
        return (
           <div className="featured">
                <div className="top">
                    <div className="title">Total Revenue</div>
                    <MoreVertIcon fontSize="small"/>
                </div>
                <div className="bottom">
                    <div className="featuredchart">
                        <CircularProgressbar strokeWidth={5} value={70} text={"70%"}/>
                    </div>
                        <p className="title">
                            Total Sales
                        </p>

                        <p className="amount">
                            $420
                        </p>

                        <p className="desc">
                            Previous transaction processing , it doesn't include the last ones
                        </p>

                        <div className="summary">
                            <div className="item">
                                <div className="itemTitle">
                                    Target
                                </div>
                                <div className="totalAmount positive">
                                    <KeyboardArrowUpIcon/>
                                    $12.5k
                                </div>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    Last Week
                                </div>
                                <div className="totalAmount negative">
                                    <KeyboardArrowDownIcon/>
                                    $12.5k
                                </div>
                            </div>
                            <div className="item">
                                <div className="itemTitle">
                                    Last Month
                                </div>
                                <div className="totalAmount negative">
                                    <KeyboardArrowDownIcon/>
                                    $12.5k
                                </div>
                            </div>
                        </div>

                    
                </div>
           </div>
        );
}

export default Featured;