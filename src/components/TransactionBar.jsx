import {Card, CardBody, CardHeader, CardFooter ,Divider, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem} from "@nextui-org/react";
import {Add} from '@icon-park/react'
function TransactionBar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Card className="mt-10 mr-8 w-80 h-[50em] p-[.9em] font-Gabarito opacity-75">
                <CardHeader className="flex justify-center">
                    <span className="text-xl">Transaction history</span>
                </CardHeader>
                <Divider className="my-4" />
                <CardBody className="">
                </CardBody>
                <Divider className="my-4" />
                <CardFooter className="flex justify-end">
                <Button color="secondary" variant="flat" onPress={onOpen} startContent={<Add theme="outline" size="24" className="secondary"/>}>
                    Add Transaction
                </Button>
                </CardFooter>
            </Card>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Add Transaction</ModalHeader>
                    <ModalBody>
                        <Input
                        key={'outside'}
                        type="text"
                        label="Transaction Name"
                        labelPlacement={'outside'}
                        placeholder="Enter Transaction Name"
                        />
                        <Select
                        labelPlacement={'outside'}
                        label="Transaction Type"
                        placeholder="Select an Transaction Type"
                        className="max-w-xs"
                        >
                            <SelectItem key={'Bills'} value={'Bills'}>Bills</SelectItem>
                        </Select>
                        <Input
                        key={'outside'}
                        type="number"
                        label="Transaction Price"
                        labelPlacement={'outside'}
                        placeholder="Enter Transaction Price"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="secondary" variant="flat" onPress={onClose}>
                        Action
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        
        </>
    );
}

export default TransactionBar;