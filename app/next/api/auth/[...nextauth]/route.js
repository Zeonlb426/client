import NextAuth from "next-auth"
 
const handler = NextAuth({
    pages: {
        signIn: '/auth/login',
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // if (!credentials?.email || !credentials.password) {
                //     return null;
                // }

                // const user = await prisma.user.findUnique({
                //     where: {
                //         email: credentials.email,
                //     },
                // });

                // if (!user || !(await compare(credentials.password, user.password))) {
                //     return null;
                // }

                // return {
                //     id: user.id,
                //     email: user.email,
                //     name: user.name,
                //     randomKey: "Hey cool",
                // };
                return {
                    id: 3,
                    email: 'ed@mail.com',
                    name: 'Vasya',
                    randomKey: "Hey cool",
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    randomKey: user.randomKey,
                };
            }
            return token;
        },
    },
})

export { handler as GET, handler as POST }