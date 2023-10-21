import {Card, CardBody} from "@nextui-org/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
function ExpenseChart() {

   

    return (
        <>
            <Card className="mt-10 w-full h-[50em] p-[.9em] font-Gabarito opacity-75 border-2 border-indigo-300">
                <CardBody>
                    <p>chart goes here</p>
                </CardBody>
            </Card>
        </>
    );
}

export default ExpenseChart;