import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
function Piechart() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 40, label: '40% Male',color:'#ff823c'},
                        { id: 1, value: 35, label: '35% Femail',color:'#0096ff'},
                        { id: 2, value: 25, label: '25% Unknown',color:'#323c46'},
                    ],
                    innerRadius: 100,
                },
            ]}
            width={650}
            height={300}
        />
    )
}

export default Piechart