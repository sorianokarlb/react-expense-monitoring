import {Card, CardBody} from "@nextui-org/react";
import {Bill} from '@icon-park/react'

function TopCard(props) {
    return (
        <Card className="min-w-[5em] md:min-w-[5em] lg:min-w-[15em] bg-indigo-300">
            <CardBody className="flex flex-col gap-3">
                <p className="text-lg font-medium">{props.title}</p>
                <span className="text-xl font-black">₱ {props.price}</span>
            </CardBody>
        </Card>
    );
}

export default TopCard;