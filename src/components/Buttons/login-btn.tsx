"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const ProtectedPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>You are not signed in</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default ProtectedPage;
