import Image from 'next/image'

export default function Modal({props, children}) {

    return (
        <div className='bg-[#0000003d] backdrop-blur-sm p-12 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
            <div className='inline bg-white dark:bg-slate-700 p-6 rounded-lg'>
                <div className='flex items-center justify-center gap-2'>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        className=""
                        width={26}
                        height={26}
                        priority
                    />
                    <span className='text-md font-bold text-black dark:text-white'>Instagram</span>
                </div>
                <div className='mt-4 min-w-[320px]'>
                    {children}
                </div>
            </div>
        </div>
    );
}