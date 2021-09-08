import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';

export default class App extends Component {

    render() {
        const data = [
            {
                color: "red",
                points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]
            }
        ];
        return (
            <div>
                <div className="App">

                    <LineChart
                        width={600}
                        height={400}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 0,
                            left: 24,
                        }}
                        data={data}
                    />
                </div>
            </div>
        );
    }
}