"use client";
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

export default function Footer({ children }) {

    return (
        <div className='w-full fixed bottom-0 left-0 right-0 flex justify-end h-16'>
            <button className='absolute border border-slate-200 dark:border-slate-600 drop-shadow-lg bg-white bottom-2 right-2 md:bottom-8 md:right-8 dark:bg-slate-800 text-violet-700 dark:text-fuchsia-500 rounded-full p-2'><PlusIcon className="h-12 w-12" aria-hidden="true"/></button>
        </div>
    );
}
