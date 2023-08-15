'use client'
import { useState } from 'react';

const MAX_COUNT = 10;

export default function Create() {
    
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [description, setDescription] = useState('')
    const [fileLimit, setFileLimit] = useState(false);

    

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            console.log(URL.createObjectURL(file));
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length >= MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
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

    const handleDescription = (e) => {
        setDescription(e.target.value.slice(0, 255));
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
                <div className='min-h-[100px] flex flex-wrap gap-4 items-center justify-center bg-slate-300 rounded-md dark:bg-slate-700 text-black dark:text-white p-4 border-2 border-dashed border-slate-400 dark:border-slate-600'>
                    {
                        uploadedFiles.length > 0 ? (
                            uploadedFiles.map((file)=>(<img src={URL.createObjectURL(file)} className='h-16 w-16 object-cover object-center rounded-md'/>))
                        ) : (
                            <span> Добавьте файлы </span>
                        )
                    }
                </div>
                <div className='w-full relative '>
                    <textarea className='bg-slate-300 w-full dark:bg-slate-700 text-black dark:text-white py-2 px-4 pr-20 rounded-md' 
                        value={description} 
                        onChange={handleDescription}
                        placeholder="Введите описание (максимальное количество символов 255)"
                        rows={5}
                    />
                    <span className='absolute right-2 text-xs top-2 z-10 p-2 rounded-md bg-slate-200 dark:bg-slate-800 text-black dark:text-white'>{description.length}/255</span>
                </div>
                
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