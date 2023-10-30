import {Card, CardBody, CardHeader, CardFooter ,Divider, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem} from "@nextui-org/react";
import {Add} from '@icon-park/react'

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { useAddTrans } from '../slices/transApiSlice';
import { setTransaction } from "../slices/transSlice";

function TransactionBar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { transInfo } = useSelector((state) => state.trans)

    const [addTrans, { isLoading }] = useAddTrans();

    const [transData, setTrans ] = useState({
        transactionName: '',
        transactionType: '',
        transactionPrice: 0,
        addedBy: 'Karl'
    })

    const handleInputTrans = async (e,field) => {

        setTrans((prevData) => ({
            ...prevData,
            [field]: e.target.value
        }))

    }



    const addHandler = async (e) => {
        try {
            const res = await addTrans({ ...transData }).unwrap();
            dispatch(setTransaction({...res}));
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

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
                        onChange={(e) => handleInputTrans(e, 'transactionName')}
                        />
                        <Select
                        labelPlacement={'outside'}
                        label="Transaction Type"
                        placeholder="Select an Transaction Type"
                        className="max-w-xs"
                        onChange={(e) => handleInputTrans(e, 'transactionType')}
                        >
                            <SelectItem key={'Bills'} value={'Bills'}>Bills & Payments</SelectItem>
                            <SelectItem key={'Expenses'} value={'Expenses'}>Expenses</SelectItem>
                            <SelectItem key={'Savings'} value={'Savings'}>Savings</SelectItem>
                        </Select>
                        <Input
                        key={'outside2'}
                        type="number"
                        label="Transaction Price"
                        labelPlacement={'outside'}
                        placeholder="Enter Transaction Price"
                        onChange={(e) => handleInputTrans(e, 'transactionPrice')}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                        <Button color="secondary" variant="flat" onPress={addHandler}>
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