"use client";
import Post from '../../components/post';
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { signIn, signOut, useSession } from "next-auth/client"
// import { useSession } from "next-auth/react"

export default function Flow() {

    // const session = await getServerSession(authOptions);
    // const {data: session, status} = useSession(authOptions)


    // console.log(status);
    // console.log(session);

    const posts = [
        {
            "id": 11,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл ",
            "createdAt": "2023-08-12T09:37:00.953Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/03251955-391f-464a-81c7-ee46ee6f4908.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/9f713be5-852e-4f93-8602-8872f57ce82e.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/2e2488bc-2896-4d83-8a01-7b365e163632.jpeg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 12,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:37:40.534Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/541e452d-1ac5-4dad-b2d7-bfb4b434da3d.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 13,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:55:42.739Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/cc2d11af-e676-4bd8-8e71-a7130e42c3b0.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/16ec6ed6-005b-4312-ae8b-62e7cf83c973.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 14,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:55:55.567Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/d07a8e71-0eed-4ba8-81e8-11734210e96c.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/53a0d7b7-1f94-4b68-a622-4521c9e6a770.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/6cea429d-d9f1-4d25-904f-dba27a69bb1c.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 15,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:56:10.064Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/c0123cac-6ef6-44a1-8730-45f315f8e870.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/75367bc2-c9cc-40c1-8709-71381d204ed3.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/19a1d7ae-acc2-48af-9a5b-5b1c7b64b458.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/a0feb699-cd94-4df7-bd9f-d68420027816.jpeg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 16,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:59:11.666Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/d87fd322-5e6d-47e9-8764-1378b8cb833a.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/dc6c5698-0cb0-432d-8c56-d545a8f0aa57.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/477eb3f7-485a-4416-931b-f5c6f114f752.jpeg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 17,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T09:59:25.539Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/f03634a7-2749-4d7d-9599-2ddcb3818651.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 18,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:00:44.549Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/07ca2b0f-8b41-4fe6-b4d0-9e1921238a8a.png"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 19,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:01:09.127Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/4370c4fc-e0a8-4a42-97cc-9c9ff061d788.jpeg",
                "https://instagram.lern.dev/storage/users/7/gallery/0555272d-af67-4e1d-92e0-11fd1b6a1597.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/39c1f99e-3a84-4e62-be19-1d2b95fc66b4.png",
                "https://instagram.lern.dev/storage/users/7/gallery/9528bf0e-803f-487b-96b3-5e2958c0eced.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/86e8099e-192f-46ce-84e1-036d1517f27e.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/c02626b3-af30-44c6-b6b0-7d7840aea52b.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 20,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:02:36.993Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/a2390a45-c785-4f35-81c5-dff125f5f2d4.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 21,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:02:50.104Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/4a8cf48f-bcfe-4cf7-b12c-7ecd37c340e5.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 22,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:03:08.038Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/97758112-81b5-4d25-972a-aa1172235574.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/ee891206-b3c1-4e27-8839-94928e380132.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/0de117ef-ab86-48aa-a533-0970700176ba.png"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 23,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:03:35.084Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/155fea30-5cbc-439b-a9c2-cf68e4c6fba8.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/92fc84c0-62a3-4283-a378-beca52625807.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/e4314b2b-1179-4970-a6e8-3645ecbb365c.jpeg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 24,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:03:56.189Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/183d8a5a-f93c-48e6-be02-4f4b69e20eb7.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/c7ea3d8e-f799-44a5-8682-fef6d7fdd910.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/fa0688de-c6a8-44ff-9a13-a2254e349caa.jpg",
                "https://instagram.lern.dev/storage/users/7/gallery/a7c20e1a-2d14-4715-bf29-b844401b0a8d.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 25,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:08:47.044Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/9edc469e-d6da-40bc-9110-2429deab0237.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        },
        {
            "id": 26,
            "description": "Перше визнання прийшло до нього у лютому 2015 року, коли репер випустив свій дебютний сингл «White Iverson»[en]. У серпні 2015 року Пост Мелоун підписав контракт з лейблом Republic Records",
            "createdAt": "2023-08-12T10:09:01.303Z",
            "images": [
                "https://instagram.lern.dev/storage/users/7/gallery/8dba51da-ac57-4d95-b394-3257fb6b98e8.jpeg",
                "https://instagram.lern.dev/storage/users/7/gallery/d3ca5cda-4e10-400a-af30-69117cf40676.jpg"
            ],
            "user": {
                "id": 7,
                "firstName": "Дмитрий",
                "lastName": "Саранский",
                "avatar": "https://instagram.lern.dev/storage/users/7/avatar/302c124d-6012-43a6-9cfc-b18c9831e002.jpg"
            }
        }
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full p-4 gap-4 sm:p-8 sm:gap-8 lg:p-12 lg:gap-12'>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}