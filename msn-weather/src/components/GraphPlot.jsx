import React from 'react'
import './GraphPlot.css';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';



    const GraphPlot = (props)=>{
        

        let tempData=[]
        let timeData = []


        for (let i = 0; i <= props.data.hourly.length; i++){
            let item = props.data.hourly[i];
            if (i % 3 === 0){
                tempData.push(Math.round(item.temp - 273.15));
                const date = new Date(item.dt * 1000)
                var hours = date.getHours();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                var strTime = hours + ' ' + ampm.toUpperCase();
                timeData.push(strTime)
            }
            else if (i >= 23)
                break;
            else
                continue;
                
        };


        const options = {
            chart: {
                type: 'areaspline',
                backgroundColor: 'transparent',
                className: 'graph-chart',
                height: 270,
                
            },
            title: {
                text:null,
                
            },
            legend: {
                enabled:false,
            },
            xAxis: {
                categories: timeData,
                labels: {
                    style: {
                        color: 'white',
                        fontSize: '12px',
                        fontFamily:'sf pro display'
                    },
                    tickmarkPlacement:'on'
                },
                lineColor:'rgba(255,255,255,0.3)'
            },
            yAxis: {
                visible:false
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units',
                enabled:false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.1,
                    color: 'rgba(255,255,255,0.5)',
                },
                series:{lineWidth:2,dataLabels:{enabled:true,align:'center',format:'{point.y} &deg;',style:{color:'white',fontSize:'15px',fontWeight:'200',fontFamily:'sf pro display'}},pointPlacement:'on'},
            },
            series: [{
                name: 'John',
                data: tempData,
                marker:{enabled:false}
            }]
        };

        
    return (
    <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
    )
}

export default GraphPlot
