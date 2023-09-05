"use client";
import { useState, useRef, useEffect } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CoordinateInput from 'react-coordinate-input'
import { useSession } from "next-auth/react";


export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [description, setDescription] = useState('');
    // const [email, setEmail] = useState('')
    // const [errFirstName, setErrFirstName] = useState('')
    // const [errLastName, setErrLastName] = useState('')
    // const [errEmail, setErrEmail] = useState('')
    // const [errMessage, setErrMessage] = useState('')

    const { data: session, status, update } = useSession();

    const token = session?.user?.token;

    useEffect(()=>{
        fetch(`/back/api/v1/user/profile`, {
            method: "GET",
            headers: {
                Authorization: token
            }
        }).then((res)=>{
            if (res.status >= 500) {
                setErrMessage('Извините, сервис не доступен. Повторите попытку позже...');
                return
            }
            // if (res.status === 400) {
            //     const { errors } = data;
            //     errors.forEach((err) => {
            //         if (err.path === "password") setErrPassword(err.msg);
            //         if (err.path === "email") setErrEmail(err.msg);
            //         if (err.path === "lastName") setErrLastName(err.msg);
            //         if (err.path === "firstName") setErrFirstName(err.msg);
            //     });
            //     setLoading(false);
            //     return
            // }

            // if (res.status === 409 || res.status === 418) {
            //     const { message } = data;
            //     setErrMessage(message)
            //     setLoading(false);
            //     return
            // }
            return res.json()
        }).then((data) => {
            console.log(data);
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setDescription(data.description || '')
            setPhone(data.phone)
        });
    }, [token])

    // const getProfile = async () => {

    //     const res = await fetch(`/back/api/v1/user/profile`, {
    //         method: "GET",
    //         headers: {
    //             Authorization: token
    //         }
    //     });
    //     if (res.status >= 500) {
    //         setErrMessage('Извините, сервис не доступен. Повторите попытку позже...');
    //         return
    //     }
        
    //     const data = await res.json();

    //     console.log(data);
        

    //     if (res.status === 200) {
    //         return data
    //     }
    // }

    // let data = null
    // if (status === "authenticated") {
    //     data = getProfile();
    // }

    const galleryRef = useRef(null);

    const [uploadedAvatar, setUploadedAvatar] = useState('');
    const [phone, setPhone] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAvatar = (e) => {

    }
    const handleFirstName = (e) => {

    }

    const handleLastName = (e) => {

    }
    const handleDescription = (e) => {

    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div className='grid grid-cols-1 w-full p-4 gap-4 md:max-w-4xl mx-auto'>
            <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>
                <div className='grid md:flex gap-6'>
                    
                </div>

                <input
                    ref={galleryRef}
                    type='file'
                    accept='image/jpg, image/png, image/jpeg, image/gif'
                    onChange={handleAvatar}
                    name="avatar"
                    hidden
                />
                <input
                    type='text'
                    onChange={handleFirstName}
                    name="firstName"
                    value={firstName}
                />
                <input
                    type='text'
                    onChange={handleLastName}
                    name="lastName"
                    value={lastName}
                />
                <div className='w-full relative '>
                    <textarea className='bg-slate-300 w-full dark:bg-slate-700 text-black dark:text-white \
                                         py-2 px-4 pr-20 rounded-md'
                        value={description}
                        onChange={handleDescription}
                        placeholder="Введите описание (максимальное количество символов 255)"
                        rows={5}
                    />
                    <span className='absolute right-2 text-xs top-2 z-10 p-2 rounded-md bg-slate-200 \
                                     dark:bg-slate-800 text-black dark:text-white'>
                        {description.length}/255
                    </span>
                </div>
                <input
                    type='tel'
                    onChange={handlePhone}
                    value={phone}
                    name="phone"
                    pattern="[0-9]{1}\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="8(XXX) XXX-XX-XX"
                />
                <CoordinateInput
                    onChange={(value, { unmaskedValue, dd, dms }) => {
                        console.log(value, unmaskedValue, dd, dms)
                    }}
                />

                <button
                    className='scale-100 mt-4 w-full hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 \
                                py-3 px-4 rounded-md bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 \
                                dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 \
                                dark:to-violet-700 to-100% text-white text-lg'
                    type='submit'
                >
                    Создать
                </button>

            </form>
        </div>
    )
}