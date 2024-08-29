import Link from "next/link";

import SignInForm from "@/app/_components/SignInForm";
function page() {
  return (
    <>
      <SignInForm />
      <Link
        className="block mt-3 text-center underline text-dark-light-grayish-blue hover:text-dark-light-grayish-blue-hover"
        href="/sign-up"
      >
        dont have an account ?.
      </Link>
    </>
  );
}

export default page;
