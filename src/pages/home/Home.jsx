import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import './Home.scss';

const Home  = () => {
   
        return (
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    main content
                </div>
            </div>
        );
}

export default Home;