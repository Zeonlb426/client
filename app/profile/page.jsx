'use client'
import { useState, useRef, useEffect } from 'react';
import { UserIcon, PhoneIcon, XMarkIcon, MapPinIcon, ArrowPathIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { useSession } from "next-auth/react";

export default function Profile() {

    const [loading, setLoading] = useState(true)

    const [description, setDescription] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState('')
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [commercial, setCommercial] = useState(false)
    const [successful, setSuccessful] = useState(false)

    const [errFirstName, setErrFirstName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    const [errPhone, setErrPhone] = useState('')
    const [errLatitude, setErrLatitude] = useState('')
    const [errLongitude, setErrLongitude] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const galleryRef = useRef(null);

    const { data: session, status, update } = useSession()

    const token = session?.user?.token

    useEffect(() => {
        fetch('/back/api/v1/user/profile', {
            method: "GET",
            headers: {
                Authorization: token
            }
        }).then((res) => {
            if (res.status >= 500) {
                setErrMessage('Извините, сервис не доступен')
                return
            }
            return res.json()
        }).then((data) => {
            setDescription(data.description || '');
            setFirstName(data.firstName || '');
            setLastName(data.lastName || '');
            let phone = data.phone || null
            if (phone) {
                phone = phone.replace('+3', '') // 87895679078
                let arr = phone.split('')
                arr.splice(1, 0, "(") // 8(7895679078
                arr.splice(5, 0, ") ") // 8(789) 5679078
                arr.splice(9, 0, "-") // 8(789) 567-9078
                arr.splice(12, 0, "-") // 8(789) 567-90-78
                phone = arr.join('')
            }
            setPhone(phone);
            setLongitude(data.longitude || null)
            setLatitude(data.latitude || null)
            setCommercial(data.commercial)
            setAvatar(data.avatar)

        })
    }, [token])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let temp = phone
        if (temp) {
            temp = temp.replace('(', '')
            temp = temp.replace(') ', '')
            temp = temp.replace('-', '')
            temp = temp.replace('-', '')
            temp = '+3' + temp
        }

        const res = await fetch('/back/api/v1/user/update', {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                description,
                longitude,
                latitude,
                commercial,
                phone: temp
            }),
        })

        if (res.status >= 500) {
            setErrMessage('Извините, сервис не доступен')
            return
        }

        const data = await res.json()

        if (res.status === 400) {
            const { errors } = data;
            errors.forEach((err) => {
                if (err.path === "lastName") setErrLastName(err.msg);
                if (err.path === "firstName") setErrFirstName(err.msg);
                if (err.path === "phone") setErrPhone(err.msg);
                if (err.path === "latitude") setErrLatitude(err.msg);
                if (err.path === "longitude") setErrLongitude(err.msg);
            });
            return
        }

        if (res.status === 200) {
            setSuccessful(true);
            setTimeout(() => { setSuccessful(false) }, 3000)
            return
        }
    }

    const handleAvatar = async (e) => {
        setAvatar(e.target.files[0])

        let formdata = new FormData();
        formdata.append("avatar", e.target.files[0]);
        await fetch('/back/api/v1/user/avatar', {
            method: "DELETE",
            headers: {
                Authorization: token
            }
        })
        await fetch('/back/api/v1/user/avatar', {
            method: "POST",
            headers: {
                Authorization: token
            },
            body: formdata,
        })
        session.user.image = URL.createObjectURL(e.target.files[0])
        update()
    }

    return (
        <>
            {status === "loading" ?
                <div className='bg-[#0000003d] backdrop-blur-sm z-[110] p-12 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
                    <span className='p-6 rounded-md bg-white'>
                        <ArrowPathIcon className='h-6 w-6 animate-spin' />
                    </span>

                </div>
                :
                ''
            }
            {successful ?
                <div className='bg-green-500 z-[1000] p-6 rounded-md absolute top-[80px] right-[40px] flex justify-center items-center'>
                    <InformationCircleIcon className='h-6 w-6 text-white' />
                    <span className='text-white'>Данные сохранены!</span>
                </div>
                :
                ''
            }
            <div className='grid grid-cols-1 w-full p-4 gap-4 md:max-w-4xl mx-auto'>
                <div className='border border-slate-300 dark:border-slate-700 bg-slate-200 \
                        dark:bg-slate-800 cursor-pointer'>
                    <div className='flex justify-center items-center p-6 min-h-[178px] '
                        onClick={() => { galleryRef.current.click() }}
                    >
                        {avatar ?
                            <img className='h-32 w-32 rounded-full object-cover object-center' src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)} />
                            :
                            <span className='p-6 border border-dashed rounded-md border-slate-700'>Добавьте аватар</span>
                        }
                    </div>
                    <input
                        ref={galleryRef}
                        type='file'
                        accept='image/jpg, image/png, image/jpeg, image/gif'
                        onChange={handleAvatar}
                        name="avatar"
                        hidden
                    />
                </div>
                <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>
                    <div className='flex gap-6 items-center'>
                        <UserIcon className='h-12 w-12 dark:text-slate-400' />
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
                    <hr className='mt-4 dark:border-slate-700' />
                    <div className='dark:text-slate-400'>Краткое описание:</div>
                    <div className='w-full relative '>
                        <textarea className='bg-slate-300 w-full dark:bg-slate-700 text-black dark:text-white \
                                            py-2 px-4 pr-20 rounded-md'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Введите описание (максимальное количество символов 255)"
                            rows={5}
                        />
                        <span className='absolute right-2 text-xs top-2 z-10 p-2 rounded-md bg-slate-200 \
                                        dark:bg-slate-800 text-black dark:text-white'>
                            {description.length}/255
                        </span>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <PhoneIcon className='h-6 w-6 dark:text-slate-400' />
                        <div className='relative w-full'>
                            <input className={`${errPhone ? 'border-red-500 ' : 'border-transparent'} border bg-white dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                type='tel'
                                onChange={e => { setPhone(e.target.value || null); setErrPhone('') }}
                                name="phone"
                                value={phone}
                                placeholder='8(XXX) XXX-XX-XX'
                                pattern='[0-9]{1}\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}'
                            />
                            {errPhone && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errPhone} </div>}
                        </div>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <MapPinIcon className='h-12 w-12 dark:text-slate-400' />
                        <div className='relative w-full'>
                            <input className={`${errLatitude ? 'border-red-500 ' : 'border-transparent'} border bg-white dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                type='number'
                                onChange={e => { setLatitude(e.target.value || null); setErrLatitude('') }}
                                name="latitude"
                                value={latitude}
                                min="-90.00000"
                                max="90.00000"
                                step="0.00001"
                            />
                            {errLatitude && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errLatitude} </div>}
                        </div>

                        <div className='relative w-full'>
                            <input className={`${errLongitude ? 'border-red-500 ' : 'border-transparent'} border bg-white dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                type='number'
                                onChange={e => { setLongitude(e.target.value || null); setErrLongitude('') }}
                                name="longitude"
                                value={longitude}
                                min="-180.00000"
                                max="180.00000"
                                step="0.00001"
                            />
                            {errLongitude && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errLongitude} </div>}
                        </div>
                    </div>
                    <label className='flex gap-4 items-center dark:text-slate-400'>
                        Коммерческий аккаунт
                        <input
                            type='checkbox'
                            name='commercial'
                            onChange={e => setCommercial(e.target.checked)}
                            checked={commercial}
                        />
                    </label>
                    <button
                        type='submit'
                        className='scale-100 mt-4 w-full hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 \
                                    py-3 px-4 rounded-md bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 \
                                    dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 \
                                    dark:to-violet-700 to-100% text-white text-lg'
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </>
    )
}