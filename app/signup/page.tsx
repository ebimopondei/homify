import SignUpForm from "@/components/signup-form";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function Signup(){

    return (
        <div className="">
            <div>
                <div className="bg-blue-3000/50 p-6 flex flex-col gap-3 items-center">
                    <h1 className="font-bold text-xl text-center">Create Account</h1>

                    <Button className="bg-grey-3000 text-black"><Instagram /> Sign up with Google</Button>
                    <p>Or</p>

                    <SignUpForm />                    
                </div>
            </div>
        </div>
    )
}