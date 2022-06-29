import '../styles/statistics.css'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';


ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const style = {
    width: '50vw',
    maxHeight: '30vh',

}
const Statistics = () => {
    const [data, setData] = useState({
        labels: ["Jan", "Feb", "March", "April", "May", "June", 'July', 'August'],
        datasets: [
            {
                label: "subscription",
                data: [3, 5, 15, 10, 18, 23, 18, 21, 15],
                backgroundColor: 'rgba(34, 72, 177, 0.288)',
                borderColor: 'blue',
                tension: 0.5,
                fill: true,
                pointStyle: 'circle',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            }
        ]
    })
    return (
        <div className="statistics">
            <div className="stats-container">
                <div className="statistics-heading">
                    <div className="stats-head">
                        Statistic
                    </div>
                    <div className="stats-right-heading">
                        <div className="stats-income">
                            Income
                        </div>
                        <div className="stats-expense">
                            Expense
                        </div>
                    </div>

                </div>
                <div className='stats-graph'>
                    <Line data={data} className='stats-graph'/>
                </div>
            </div>
        </div >
    );
}

export default Statistics;