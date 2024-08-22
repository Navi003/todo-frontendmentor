"use client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../_components/Input";
import { sendRequest } from "@/app/services/sendRequest";
import Link from "next/link";
import { useUser } from "../_components/userContext";
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
