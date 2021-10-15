import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {

    let maxValue = 0;

    // for (let datapoint of props.dataPoints) {
    //     if (datapoint.value > maxValue) {
    //         maxValue = datapoint.value;
    //     }
    // }
    // console.log(`maxValue 01: ${maxValue}`);

    const values = props.dataPoints.map(datapoint => datapoint.value);
    maxValue = Math.max(...values);
    // console.log(`maxValue 02: ${maxValue}`);

    return (
        <div className="chart">
            {props.dataPoints.map(point => <ChartBar key={point.label} value={point.value} maxValue={maxValue} label={point.label} />)}
        </div>
    );
}

export default Chart;