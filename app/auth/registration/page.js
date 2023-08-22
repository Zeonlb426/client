"use client";
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../../../components/modal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Registration() {

    const [showModal, setShowModal] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [errFirstName, setErrFirstName] = useState('')
    const [errLastName, setErrLastName] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')

    const router = useRouter()

    const handlerModalButton = () => {
        setShowModal(false)
        router.push('/auth/login')
    }

    const handlerRegistration = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`/back/api/v1/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
        });
        if (res.status >= 500) {
            setErrMessage('Извините, сервис не доступен. Повторите попытку позже...');
            setLoading(false);
            return
        }
        
        const data = await res.json();
        
        if (res.status === 400) {
            const { errors } = data;
            errors.forEach((err) => {
                if (err.path === "password") setErrPassword(err.msg);
                if (err.path === "email") setErrEmail(err.msg);
                if (err.path === "lastName") setErrLastName(err.msg);
                if (err.path === "firstName") setErrFirstName(err.msg);
            });
            setLoading(false);
            return
        }

        if (res.status === 409 || res.status === 418) {
            const { message } = data;
            setErrMessage(message)
            setLoading(false);
            return
        }

        if (res.status === 200) {
            setShowModal(true);
            setLoading(false);
            return
        }
    }

    return (
        <div className='flex h-screen w-full bg-white dark:bg-slate-800  md:bg-slate-50 md:dark:bg-slate-900 items-center justify-center md:p-5'>
            <div className='grid grid-cols-1 lg:grid-cols-5 w-full max-w-[420px] lg:max-w-[1024px]'>
                <Image
                    src="/images/phone.png"
                    alt="Phones"
                    className="col-start-1 col-end-4 hidden lg:block"
                    width={800}
                    height={766}
                    priority
                />
                <div className='lg:col-start-4 lg:col-end-6'>
                    <div className='w-full relative rounded-lg bg-white dark:bg-slate-800 md:shadow-lg px-8 py-12'>
                        {errMessage && <div className="absolute right-8 left-8 text-red-500 text-[10px] top-[20px] p-2 border border-red-500 rounded-md"> {errMessage} </div>}
                        <div className='flex items-center justify-center gap-2 mt-4'>
                            <Image
                                src="/images/logo.svg"
                                alt="Logo"
                                className=""
                                width={44}
                                height={44}
                                priority
                            />
                            <span className='text-lg font-bold text-black dark:text-white'>Instagram</span>
                        </div>
                        <form className='grid mt-4 gap-6' onSubmit={handlerRegistration}>
                            <div className='relative w-full'>
                                <input className={`${errFirstName ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
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
                                <input className={`${errLastName ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='text'
                                    name="lastName"
                                    required
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value); setErrLastName('') }}
                                    placeholder='Фамилия'
                                />
                                {errLastName && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errLastName} </div>}
                            </div>
                            <div className='relative w-full'>
                                <input className={`${errEmail ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='email'
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setErrEmail(''); setErrMessage('') }}
                                    placeholder='example@email.com'
                                />
                                {errEmail && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errEmail} </div>}
                            </div>
                            <div className='relative w-full'>
                                <input className={`${errPassword ? 'border-red-500 ' : 'border-transparent'} border bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md w-full`}
                                    type='password'
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrPassword('') }}
                                    placeholder='Пароль'
                                />
                                {errPassword && <div className="absolute text-red-500 text-[10px] -top-[16px]"> {errPassword} </div>}
                            </div>
                            <button
                                className='mt-4 w-full hover:drop-shadow-md ease-in-out duration-300 py-3 px-4 rounded-md \
                                bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \ 
                                text-white text-lg flex items-center justify-center'
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? <ArrowPathIcon className='h-6 w-6 animate-spin'/> : 'Зарегистрироваться'}
                            </button>
                        </form>

                        <div className='w-full border-b-2 border-slate-200 dark:border-slate-700 mt-6 flex justify-center'>
                            <span className='bg-white dark:bg-slate-800 p-2 -mb-[20px] text-slate-900 dark:text-white'>ИЛИ</span>
                        </div>
                        <button
                            className='flex justify-center text-slate-900 dark:text-white items-center gap-2 mt-8 w-full py-2 px-4 border rounded-md border-indigo-500'
                            onClick={''}
                        >
                            <Image
                                src="/images/google.svg"
                                alt="Logo"
                                className=""
                                width={24}
                                height={24}
                                priority
                            />
                            Войти через Google
                        </button>
                        <div className='flex justify-center mt-4'>
                            <Link href={'/auth/login'} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'>Перейти на страницу логина</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal ?
                    <Modal>
                        <div className='text-center'>
                            <h2 className='font-bold text-black dark:text-white'>Подтверждение регистрации</h2>
                            <p className='mt-2 text-slate-600 dark:text-slate-300 text-sm'>
                                На Вашу почту было отправлено письмо с подтверждением о регистрации. <br />
                                Перейдите по ссылке, указанной в письме.<br /> Время действия ссылки 10 минут.
                            </p>
                            <button onClick={handlerModalButton} className='py-2 px-4 bg-green-500 rounded-md mt-3 text-white'>Ok</button>
                        </div>
                    </Modal>
                    :
                    ''
            }

        </div>
    )
}