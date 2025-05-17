import LoginForm from "@/components/login-form";
import React from "react";

export default function Login() {

  return (
    <div className="">
        <div>
            <div className="bg-blue-3000/50 p-6 flex flex-col gap-3 items-center">
                <h1 className="font-bold text-xl text-center">Welcome Back</h1>
                <p>Welcome back! Enter your details to sign in.</p>

                <LoginForm />
            </div>
        </div>
    </div>
  );
}