import {ChartManager} from "../Core/ChartManager";
import {GridLines} from "../Components/GridLines";
import {Axis} from "../Components/Axis";
import {Legend} from "../Components/Legend";
export class LineChart extends ChartManager {


    render() {
        const {dataSet , labels } = this.options.data;
        dataSet.forEach((data) => {
            return this.renderer.drawLine(/* add logic */)
        })
    }
}