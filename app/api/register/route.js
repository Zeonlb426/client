
import { NextResponse } from "next/server";
// import { signIn } from "next-auth/react";

export async function GET(req) {
  const token = req.nextUrl.searchParams.get('tkey');

  if (token === null || token === '') {
    return NextResponse.redirect(`${process.env.APP_URL}/auth/registration`);
  }

  const res = await fetch(`${process.env.URL_INTERNAL}/back/api/v1/register/confirm?tkey=${token}`);

  if (res.status >= 400) {
    return NextResponse.redirect(`${process.env.APP_URL}/auth/registration`);
  }

  // const user = await res.json();

//   const auth = await signIn('credentials', {
//     redirect: true,
//     email: user.email,
//     password: user.password,
//     callbackUrl: `${process.env.APP_URL}/flow`,
// });
// console.log(auth);
  return NextResponse.redirect(`${process.env.APP_URL}/flow`);
  //   return NextResponse.json(
  //     { message: "An error occurred while registering the user." },
  //     { status: 500 }
  //   );

}