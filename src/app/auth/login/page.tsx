'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const session = useSession();
  const router = useSearchParams();

  const closeOnSuccess = router.get('closeOnSuccess');

  return (
    <>
      {session && session.data ? (
        <>
          Signed in as {session.data.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn('google', {callbackUrl: `/?closeOnSuccess=${closeOnSuccess}`})}>Sign in</button>
        </>
      )}
    </>
  )
}
