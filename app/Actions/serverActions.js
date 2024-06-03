'use server'
import { signIn, signOut, auth } from "@/auth"

const handleSignIn = async (site) => {
  await signIn(site, { redirectTo: "/dashboard" });
}

const handleSignOut = async () => {
  await signOut();
}
1
const getSession = async () => {
  const session = await auth();
  return session
}

export { handleSignIn, handleSignOut, getSession };