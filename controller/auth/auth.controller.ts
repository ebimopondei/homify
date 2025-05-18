import { loginUser, signupUser } from "../../database/queries";
import { hashString } from "../../helpers";

const jwt = require('jsonwebtoken');
import { SECRET as secret, REFRESHSECRET as refreshSecret } from '../../config/secret'
import { NextRequest, NextResponse } from "next/server";


const signupController = async(req:NextRequest)=>{
    const data = await req.json();
    const password_hash = hashString(data.password);
    const email_hash = hashString(data.email);
    const response = await signupUser( { ...data, password_hash }, email_hash );

    const token = jwt.sign(response.toJSON(), secret, {expiresIn: "1h" });
    const refreshToken = jwt.sign(response.toJSON(), refreshSecret, { expiresIn: "1d"});

    return NextResponse.json( { success: true, data: { token, refreshToken }, message: 'Sign up Success!'}); 
}

async function loginController(req:NextRequest){
    const data = await req.json();
    const user = await loginUser(data); 

    const token = jwt.sign(user.toJSON(), secret, {expiresIn: "1h" });
    const refreshToken = jwt.sign(user.toJSON(), refreshSecret, { expiresIn: "1d"});

    return NextResponse.json( { success: true, data, message: 'Login Success'});    
}


export {
    loginController,
    signupController
}