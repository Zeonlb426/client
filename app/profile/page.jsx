"use client";
import { useState, useRef, useEffect } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { useSession } from "next-auth/react";



export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [description, setDescription] = useState('');
    const [longitude, setLongitude] = useState(0.00000);
    const [latitude, setLatitude] = useState(0.00000);
    const [commercial, setCommercial] = useState(false);
    const [uploadedAvatar, setUploadedAvatar] = useState('');
    const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('')
    const [errFirstName, setErrFirstName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    // const [errEmail, setErrEmail] = useState('')
    const [errMessage, setErrMessage] = useState('')

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
            
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setDescription(data.description || '')
            let phone = data.phone || null
            if (phone) {
                phone = phone.replace('+3', '')
                let arr = phone.split('')
                arr.splice(1, 0, '(')
                arr.splice(5, 0, ') ')
                arr.splice(9, 0, '-')
                arr.splice(12, 0, '-')
                phone = arr.join('')
            }
            
            setPhone(phone)
            setLongitude(data.longitude)
            setLatitude(data.latitude)
            setCommercial(data.commercial)
        });
    }, [token])



    // let data = null
    // if (status === "authenticated") {
    //     data = getProfile();
    // }

    const galleryRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let pp = phone
        if(pp){
            pp = pp.replace('(', '')
            pp = pp.replace(') ', '')
            pp = pp.replace('-', '')
            pp = pp.replace('-', '')
            pp = '+3' + pp
        }
       
        const res = await fetch(`/back/api/v1/user/update`, {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phone: pp,
                description,
                longitude,
                latitude,
                commercial,
            }),
        })
        if (res.status >= 500) {
            setErrMessage('Извините, сервис не доступен. Повторите попытку позже...');
            return
        }
        
        const data = await res.json();
        console.log(data);

    }

    const handleAvatar = (e) => {

    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleLongitude = (e) => {
        setLongitude(e.target.value)
    }

    const handleLatitude = (e) => {
        setLatitude(e.target.value)
    }

    const handleCommercial = (e) => {
        console.log(e.target.checked);
        setCommercial(e.target.checked)
    }
    return (
        <div className='grid grid-cols-1 w-full p-4 gap-4 md:max-w-4xl mx-auto'>

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
            <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>
                <div className='flex gap-6'>
                    <div className='relative w-full'>
                        <input className={`${errFirstName ? 'border-red-500 ' : 'border-transparent'} border bg-white dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                            type='text'
                            name="firstName"
                            required
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value); setErrFirstName('') }}
                            placeholder='Имя'
                        />
                        {errFirstName && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errFirstName} </div>}
                    </div>

                    <div className='relative w-full'>
                        <input className={`${errLastName ? 'border-red-500 ' : 'border-transparent'} border bg-white dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                            type='text'
                            name="lastName"
                            required
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value); setErrLastName('') }}
                            placeholder='Фамилия'
                        />
                        {errLastName && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errLastName} </div>}
                    </div>
                </div>
                
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
                <input
                    type='number'
                    onChange={handleLongitude}
                    value={longitude}
                    name="longitude"
                    min="-180.00000" max="180.00000"
                    placeholder="Координата долготы"
                    step="0.00001"
                />
                <input
                    type='number'
                    onChange={handleLatitude}
                    value={latitude}
                    name="latitude"
                    min="-90.00000" max="90.00000"
                    placeholder="Координата широты"
                    step="0.00001"
                />
                <label className='text-black dark:text-white flex gap-4'>
                    Коммерческий аккаунт
                    <input
                        type='checkbox'
                        onChange={handleCommercial}
                        name="commercial"
                        checked={commercial}
                    />
                </label>
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