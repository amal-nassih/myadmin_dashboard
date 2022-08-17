import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Widget from "../../widgets/widget";

import './Home.scss';

const Home  = () => {
   
        return (
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>

                    <div className="charts">
                        <Featured/>
                        <Chart/>
                    </div>
                </div>
            </div>
        );
}

export default Home;