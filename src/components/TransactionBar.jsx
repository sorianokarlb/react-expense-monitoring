import {Card, CardBody, CardHeader, CardFooter ,Divider, Button} from "@nextui-org/react";
import {Add} from '@icon-park/react'
function TransactionBar() {
    return (
        <Card className="mt-10 mr-8 w-80 h-[50em] p-[.9em] font-Gabarito opacity-75">
            <CardHeader className="flex justify-center">
                <span className="text-xl">Transaction history</span>
            </CardHeader>
            <Divider className="my-4" />
            <CardBody className="">
            </CardBody>
            <Divider className="my-4" />
            <CardFooter className="flex justify-end">
            <Button color="secondary" variant="flat" startContent={<Add theme="outline" size="24" className="secondary"/>}>
                Add Transaction
            </Button>
            </CardFooter>
        </Card>
    );
}

export default TransactionBar;