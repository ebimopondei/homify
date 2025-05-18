import { Op, QueryTypes } from 'sequelize';
import User from '../models/user';
import Verification from '../models/verification';
import '../database/setup';

import path from 'path';
import { DatabaseError } from '../utils/DatabaseError';

const fs = require( 'fs')


interface LinkInput {
    id?: string;
    platform_id: string;
    order: string;
    url: string;
  }

  interface Link {
    icon: string;
    platform: string;
  }


const signupUser = async(user:User, email_hash:string)=>{
    const {
        email,
        password,
        password_hash,

    } = user;

    let res

    res = await User.findAll( {where: { email } } );
    
    if(res.length > 0) throw new DatabaseError('Email exists in database', 409)
    
    res = await User.create( {
        email,
        password,
        password_hash
    });

    await Verification.create( {
        token: email_hash,
        userId: res.id 
    })

    return res
}

const loginUser = async({ email, password } : User) => {

    let res = await User.findOne( {  where: { [Op.and]: [ { [Op.or]: [{ email }, { username: email }]}, { password }] }, attributes: { exclude: ['password', 'password_hash', 'firstname', 'lastname', 'address', 'country', 'phone', 'dob', 'emailverified']}})
    if ( !res ) throw new DatabaseError('User not found', 401);
    return res;
}

const updateUserProfile = async(userId:string, user:User, avatar_url:string ='')=>{
    const {
        username,
        firstname,
        lastname,
        email,
        address,
        country,
        phone,
        dob,
    } = user;

    try {

      const existingUser = await User.findOne({ where: { id: userId } });

      if (!existingUser) {
        return {
            success: false,
            message: 'User not found',
            data: null
        };
      }

      if (avatar_url && existingUser.avatar_url && existingUser.avatar_url !== avatar_url) {
    
        const filePath = path.join(__dirname, `../uploads/${existingUser.avatar_url}`);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log('deleted')
        } else {

            console.log('not found')

        }
      }
      
      const data = await User.update({ username, firstname, lastname, email, address, country, phone, dob, avatar_url }, { where: { id: userId } } );
      
      return {
          success: true,
          data,
          message: "User Updated successfully"
      }   

  } catch (error) {
      console.error('Error deleting avatar:', error);
      
  }

}


async function getUserProfileDetails (userId:string) {
    const response = User.findOne( { where: { id: userId}})
    return response
}

async function getUserPublicProfile (username:string) {
  const response = User.findOne( { where: { username }, attributes: { exclude: ['password']}})
  return response;
}



export { 
    loginUser, 
    signupUser,
    updateUserProfile,
    getUserProfileDetails,
    getUserPublicProfile
}