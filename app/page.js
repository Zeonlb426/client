import Image from 'next/image'
import { getServerSession } from "next-auth/next"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }

    return {
        props: { ...session }
    }
}
