export { default } from "next-auth/middleware"

// export const config = { matcher: ["/flow", "/create", "/", "/profile"] }
export const config = { matcher: ["/flow", "/", "/profile"] }
// export const config = { matcher: ["/"] }

// import { NextResponse } from 'next/server'
// import { isAuthenticated } from '@/lib/auth'


// export function middleware(request) {
//     console.log(request.nextUrl.pathname);
//     if (!isAuthenticated(request)) {
//         // return NextResponse.redirect(new URL('/auth/login', request.url))
//     }
// }


// export const config = {
//   matcher: '/about/:path*',
// }