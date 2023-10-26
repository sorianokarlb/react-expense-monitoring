import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Spinner} from "@nextui-org/react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useLoginMutation} from "../slices/usersApiSlice.js";
import { setCredentials } from "../slices/authSlice.js";
import { toast } from 'react-toastify';
function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(()=>{
        if(userInfo){
            navigate('/dashboard');
        }
    }, [navigate,userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/dashboard');
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="bg-slate-200 w-3/5 shadow-md shadow-slate-500 grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2">
                <Image
                alt="nextui logo"
                radius="lg"
                src="src/assets/images/expenses.png"
                className="h-[12rem] w-full md:h-[32rem] md:w-auto"
                />
                </div>
                <div className="w-full">
                <CardHeader className="flex flex-col items-center justify-center gap-4">
                <Image
                alt="nextui logo"
                height={80}
                radius="sm"
                src="src/assets/images/logo.png"
                width={100}
                />
                <h4 className="font-bold text-xl text-indigo-500">Expense Tracker</h4>
                </CardHeader>
                <CardBody>
                    <div className="flex w-full flex-col gap-4 ">
                        <Input 
                        className="border-2 border-indigo-300 rounded-xl text-indigo-500" 
                        type="email" 
                        label={<span className="text-indigo-500">Email</span>} 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                        <Input 
                        className="border-2 border-indigo-300 rounded-xl text-indigo-500" 
                        type="password" 
                        label={<span className="text-indigo-500">Password</span>} 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                        <Button 
                        className="bg-indigo-500 hover:bg-indigo-400 text-slate-300 text-lg" 
                        variant="solid"
                        onClick={submitHandler}
                        >{ isLoading ? <Spinner /> : 'Login'}</Button>
                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-center">
                <span className="text-xs">Already have an account ?</span><Link href="/register">Register</Link>
                </CardFooter>
                </div>
                
            </Card>
        </div>
    )
}

export default Login;