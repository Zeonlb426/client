'use client'
import { useState } from 'react';

const MAX_COUNT = 10;

export default function Create() {
    
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)

    }

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    const handlerCreate = () => {

        console.log('Press Create');
    }

    return (
        <div className='grid grid-cols-1 w-full p-4 gap-4'>
            <form className='grid mt-4 gap-4'>
                <input className='bg-slate-300 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md'
                    type='file'
                    multiple
                    accept='image/jpg, image/png, image/jpeg, image/gif'
                    onChange={handleFileEvent}
                    disabled={fileLimit}
                    name="gallery"
                />
                <input className='bg-slate-300 dark:bg-slate-700 text-black dark:text-white py-2 px-4 rounded-md'
                    type='text'
                    name="description"
                    placeholder='Краткое описание'
                />
            </form>
            <button
                className='scale-100 mt-4 w-full hover:scale-105 hover:drop-shadow-xl ease-in-out duration-300 py-3 px-4 rounded-md \
                            bg-gradient-to-r from-amber-500 dark:from-purple-600 from-0% via-orange-600 dark:via-cyan-600 via-30% via-pink-500 dark:via-blue-500 via-60% to-fuchsia-700 dark:to-violet-700 to-100% \ 
                            text-white text-lg'
                onClick={handlerCreate}
            >
                Создать
            </button>
        </div>
    )
}