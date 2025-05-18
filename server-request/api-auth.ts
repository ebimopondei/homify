import { LoginResponse, RefreshTokenResponse, SignupResponse } from "../types/api-response-type";
import API from "./api-config";
import { signUpType } from "@/types/signup";

export default function ApiAuth (){

    const { api } = API();

    const login= async (email:string, password:string):Promise<LoginResponse> =>{
        const res = await api.post(`/auth/login`, { email, password } );
        return res.data;
    }
    
    const newRefreshToken= async ():Promise<RefreshTokenResponse> =>{
        try{
            const res = await api.post(`/auth/refresh`, {}, { withCredentials: true });
            return res.data;
        }catch(err:any){
            if (err.response) {
                return { success: false, message: err.response.data.message, data: { token: "", refreshToken: "", roles: [''] } };
            } else {
                return {success: false, message: err.message, data: {token: "", refreshToken: "", roles: ['']}}
            }
        }
    }

    const signUp= async (signUpData: signUpType ):Promise<SignupResponse> =>{
        try{
            const res = await api.post(`/auth/signup`, { ...signUpData }
        );
            const data = res.data
            return data;
        }catch(err:any){
            if (err.response) {
                return { success: false, message: err.response.data.message, data: { token: "", refreshToken: "", roles: [''] } };
            } else {
                return {success: false, message: err.message, data: {token: "", refreshToken: "", roles: ['']}}
            }
        }
    }




    

    return  { login, signUp, newRefreshToken }

}

