
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";

export async function GET(req) {
  const token = req.nextUrl.searchParams.get('tkey');

  if (token === null || token === '') {
    return NextResponse.redirect(`${process.env.APP_URL}/auth/registration`);
  }

  const res = await fetch(`${process.env.NEXTAUTH_URL_INTERNAL}/back/api/v1/register/confirm?tkey=${token}`);

  if (res.status >= 401) {
    return NextResponse.redirect(`${process.env.APP_URL}/auth/registration`);
  }

  const user = await res.json();

  const auth = await signIn('credentials', {
    redirect: false,
    firstName: user.firstName,
    lastName: user.lastName,
    accessToken: user.token,
    email: user.email,
    password: user.password,
    callbackUrl: `${process.env.APP_URL}/flow`,
});
console.log(auth);
  return NextResponse.redirect(`${process.env.APP_URL}/create`);
  // try {
  //   const { name, email, password } = await req.json();
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   await connectMongoDB();
  //   await User.create({ name, email, password: hashedPassword });

  //   return NextResponse.json({ message: "User registered." }, { status: 201 });
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "An error occurred while registering the user." },
  //     { status: 500 }
  //   );
  // }
}