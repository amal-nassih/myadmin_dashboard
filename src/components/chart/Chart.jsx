import React from "react";
import './Chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name:"January", total:1200},
    {name:"February", total:400},
    {name:"March", total:600},
    {name:"April", total:800},
    {name:"May", total:1400},
    {name:"June", total:800},
]
const Chart  = () => {
   
        return (
            <div className="chart">
                <h1 className="title">Last 6 Months (Revenue)</h1>
                <ResponsiveContainer width="100%" aspect={2/1}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" className="chartgrid"/>
                <XAxis dataKey="name" stroke="gray"/>

                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        </ResponsiveContainer>
            </div>
        );
}

export default Chart;