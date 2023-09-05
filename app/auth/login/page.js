'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { signIn } from "next-auth/react";
export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerGoogle = async e => {
        e.preventDefault();
        const res = await signIn('google', {
            redirect: true,
            callbackUrl: 'https://instagram.lern.dev/flow',
        });
        console.log('----------------');
        console.log('res: ');
        console.log(res);
        console.log('----------------');
    }

    const handleSubmit = async event => {
        event.preventDefault();

        let params = (new URL(document.location)).searchParams;
        let callbackUrl = params.get("callbackUrl");
        if (callbackUrl === null || callbackUrl === '') callbackUrl = 'https://instagram.lern.dev/flow'
        const res = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: callbackUrl,
        });
        console.log('----------------');
        console.log('res: ');
        console.log(res);
        console.log('----------------');
        // if (res?.error) {
        //     setError(res.error);
        // } else {
        //     setError(null);
        // }
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
                    <div className='w-full rounded-lg bg-white dark:bg-slate-800 md:shadow-lg px-8 py-12'>
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
                        <form className='grid mt-4 gap-4' onSubmit={handleSubmit}>
                            <input className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md'
                                type='email'
                                name="email"
                                placeholder='example@email.com'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input className='bg-slate-100 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md'
                                type='password'
                                name="password"
                                placeholder='Пароль'
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button
                                className='scale-100 hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 py-3 px-4 rounded-md \
                                    bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \ 
                                    text-white text-lg'
                                type="submit"
                            >
                                Войти
                            </button>
                        </form>

                        <div className='w-full border-b-2 border-slate-200 dark:border-slate-700 mt-6 flex justify-center'>
                            <span className='bg-white dark:bg-slate-800 p-2 -mb-[20px] text-slate-900 dark:text-white'>OR</span>
                        </div>
                        <button
                            className='flex justify-center items-center gap-2 mt-8 w-full py-2 px-4 border rounded-md border-indigo-500 text-slate-900 dark:text-white'
                            onClick={handlerGoogle}
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
                        <div className='flex justify-center mt-4 gap-2 text-slate-900 dark:text-white'>
                            Забыли пароль? <Link href={''} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'> Восстановить!</Link>
                        </div>
                        <div className='mt-4 border-b border-slate-200 dark:border-slate-700 max-w-[70px] mx-auto'></div>
                        <div className='flex justify-center mt-4 gap-2'>
                            <Link href={'/auth/registration'} className='text-indigo-500 underline decoration-solid hover:text-indigo-800  hover:dark:text-indigo-300'>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}