import { redirect } from "next/navigation";

import { createClient } from "../../services/auth/server";
import { SignOutButton } from "./components/sign-out-button";

async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single();

  return (
    <main>
      <h1>Admin</h1>
      <p>{profile?.username ?? user.email}</p>
      <SignOutButton />
    </main>
  );
}

export default AdminPage;
