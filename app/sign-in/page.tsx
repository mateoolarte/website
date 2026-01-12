import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function SignIn() {
  return (
    <form>
      <h1>Sign In</h1>
    </form>
  );
}

export default SignIn;
