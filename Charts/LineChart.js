import {ChartManager} from "../Core/ChartManager";

export class LineChart extends ChartManager {


    render() {
        const {dataSet , labels } = this.options.data;
        dataSet.forEach((data) => {
            return this.renderer.drawLine(/* add logic */)
        })
    }
}