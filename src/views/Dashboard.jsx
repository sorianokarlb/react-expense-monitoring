// nextui
import {Card, CardBody} from "@nextui-org/react";

// components
import NavbarComponent from "../components/NavbarComponent";
import Sidebar from "../components/Sidebar";
import TransactionBar from "../components/TransactionBar";
import TopCard from "../components/TopCard";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard () {

    return (
        <>
            <div className="flex flex-row gap-6 p-5">
                <Sidebar />
                <Card className="mt-10 w-[80em] h-[50em] p-[.9em] font-Gabarito opacity-75">
                    <CardBody className="flex flex-col">
                        <div className="flex flex-row gap-3">
                            <TopCard title={'Foods'} price={'420'}/>
                            <TopCard title={'Bills & Payments'} price={'420'}/>
                            <TopCard title={'Expenses'} price={'420'}/>
                        </div>
                        <ExpenseChart />
                    </CardBody>
                </Card>
                <TransactionBar />

            </div>
        </>
    );
}

export default Dashboard;