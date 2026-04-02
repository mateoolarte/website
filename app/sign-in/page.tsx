import type { Metadata } from "next";

import { SignInForm } from "./components/sign-in-form";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function SignIn() {
  return <SignInForm />;
}

export default SignIn;
