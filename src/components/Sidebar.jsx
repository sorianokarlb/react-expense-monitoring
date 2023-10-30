// nextui
import {Card, CardBody, CardHeader, CardFooter ,Divider, Listbox, ListboxItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, useSelect} from "@nextui-org/react";
import {AllApplication, Bill, ChartLineArea, WalletOne, Setting} from '@icon-park/react'
import {Image} from "@nextui-org/image";
import { toast } from 'react-toastify';

// redux
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from '../slices/usersApiSlice.js';
import { clearCredentials } from "../slices/authSlice.js";

function Sidebar() {
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutAPICall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutAPICall().unwrap();
            dispatch(clearCredentials());
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }
 return (
    <Card className="mt-10 ml-8 w-60 h-[50em] p-[.9em] font-Gabarito opacity-75">
        <CardHeader className="flex flex-row gap-3">
        <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat" className="font-Gabarito">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={ logoutHandler }>Log Out</DropdownItem>
                        </DropdownMenu>
            </Dropdown>
            { userInfo ? (<span className="text-medium font-black">Hello, {userInfo.firstname}</span>) : (<span className="text-medium font-black">Hello, User not found</span>)}
            
        
        </CardHeader>
        <Divider className="" />
        <CardBody className="">
            <Listbox
            aria-label="Listbox Variants"
            color="secondary"
            variant="flat"
            >
                <ListboxItem key="dashboard" startContent={<AllApplication theme="outline" size="20" className="secondary"/>}>
                    <span className="text-base">Dashboard</span>
                </ListboxItem>
                <ListboxItem key="bills" startContent={<Bill theme="outline" size="20" className="secondary"/>}>Bills & Payments</ListboxItem>
                <ListboxItem key="expenses" startContent={<ChartLineArea theme="outline" size="20" className="secondary"/>}>Expenses</ListboxItem>
                <ListboxItem key="savings" startContent={<WalletOne theme="outline" size="20" className="secondary"/>}>Savings</ListboxItem>
                <ListboxItem key="settings" startContent={<Setting theme="outline" size="20" className="secondary"/>}>Settings</ListboxItem>
                {/* <ListboxItem key="delete" className="text-danger" color="danger">
                    Delete file
                </ListboxItem> */}
            </Listbox>
        </CardBody>

        <CardFooter className="flex justify-center">
            <Image
            alt="nextui logo"
            height={80}
            radius="sm"
            src="src/assets/images/logo.png"
            width={50}
            />
            <span className="font-GrandHotel text-xl font-semibold subpixel-antialiased italic decoration-2 text-indigo-500">Expense.</span>
        </CardFooter>

    </Card>
 )
}

export default Sidebar;