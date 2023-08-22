import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    pages: {
        signIn: '/auth/login',
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',

    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: 'credentials',
            async authorize(credentials, req) {
                console.log('++++++++++++++++++++++++');
                console.log(credentials);
                console.log('++++++++++++++++++++++++');

                // const res = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/back/api/v1/login`, {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json",
                //         'Accept': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         email: credentials?.email,
                //         password: credentials?.password,
                //     }),
                // });

                // const user = await res.json();

                // if (user) {
                //     // Any object returned will be saved in `user` property of the JWT
                //     return user;
                // } else {
                //     // If you return null then an error will be displayed advising the user to check their details.
                //     return null;

                //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                // }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log('*********************');
            console.log(token);
            console.log(user);
            console.log('*********************');
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            console.log('=============================');
            console.log(session);
            console.log(token);
            console.log(user);
            console.log('=============================');
            session.user = token;
            return session;
        },
    },

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }