import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
            setDailyData(dailyData);
        };
        //console.log(dailyData);
        fetchAPI();
    },[]);

    //dailyData.map(({ confirmed }) => console.log(confirmed));
    const lineChart = (
        dailyData.length?(<Line
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill:true,
                }],
            }
        
        }
            
            
            
        />):null
    )

    const { confirmed, deaths, recovered } = data;

    //console.log(confirmed, deaths, recovered);
    const barChart = (
        confirmed ?
            (
                <Bar data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                        data:[confirmed.value,recovered.value*0.75,deaths.value]
                    }]
                }}
                    options= {{
                        legends: { display: false },
                        title:{display:true, text:`Current state in ${country}`}
                }}
                />
            ) : null
    );
    
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}


export default Chart;