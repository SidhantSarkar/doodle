'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Logout() {
  const session = useSession();
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
          <button onClick={() => signIn('google')}>Sign in</button>
        </>
      )}
    </>
  )
}