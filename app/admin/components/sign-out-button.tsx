"use client";

import { useRouter } from "next/navigation";

import { createClient } from "../../../services/auth/client";

export function SignOutButton() {
  const router = useRouter();

  async function handleClick() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/sign-in");
  }

  return <button onClick={handleClick}>Sign out</button>;
}
