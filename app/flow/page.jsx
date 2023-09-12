"use client";
import Post from '../../components/post';
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { signIn, signOut, useSession } from "next-auth/client"
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';

export default function Flow() {

    const {data: session, status} = useSession()

    const token = session?.user?.token

    const [posts, setPosts] = useState([])
    const [errMessage, setErrMessage] = useState('')

    useEffect(() => {
        fetch('/back/api/v1/post/all', {
            method: "GET",
            headers: {
                Authorization: token
            }
        }).then((res) => {
            if (res.status >= 400) {
                setErrMessage('Извините, сервис не доступен')
                return
            }
            return res.json()
        }).then((data) => {
            if (data) {
                setPosts(data.posts)
            }
        })
    }, [token])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-4 gap-4 sm:p-8 sm:gap-8 lg:p-12 lg:gap-12'>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}