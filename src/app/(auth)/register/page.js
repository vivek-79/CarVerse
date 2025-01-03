
'use client'
import React, { useState } from 'react'
import './register.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailIcon from '@mui/icons-material/Mail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { BASE_API_URL } from '@/utils/constants'

export default function RegisterPage() {

    const { register, handleSubmit } = useForm()
    const [error,seterror] = useState('')
    const handleRegister = async (data) => {
        seterror('')
       try {
         const register = await fetch(`${BASE_API_URL}/api/signup`, {
             method: "POST",
             headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(data),
         })
 
         const result = await register.json()
         if(!result.success){
             seterror(result.message)
         }
       } catch (error) {
        seterror('Error occured while registering try again')
       }
    }
    return (
        <div className='register'>
            <form className='register-form'
                onSubmit={handleSubmit(handleRegister)}
            >
                <div className='form-comp' id='header'>
                    <h2>Register</h2>
                </div>
                <div className='form-comp'>
                    <input
                        placeholder='Full name'
                        type='text'
                        required
                        {...register('fullName')}
                    />
                    <PersonOutlineIcon sx={{color:'gray'}}/>
                </div>
                <div className='form-comp'>
                    <input
                        placeholder='User name'
                        type='text'
                        required
                        {...register('userName')}
                    />
                    <PersonOutlineIcon sx={{color:'gray'}}/>
                </div>
                <div className='form-comp'>
                    <input type='text'
                        placeholder='Email'
                        required
                        {...register('email')}
                    />
                    <MailIcon sx={{color:'gray'}}/>
                </div>
                <div className='form-comp'>
                    <input type='password'
                    placeholder='Password'
                        required
                        {...register('password')}
                    />
                    <LockOpenIcon sx={{color:'gray'}}/>
                </div>
                 {error && <p className='error'>{error}</p> }
                <div className='form-comp' id='button'>
                    <button type='submit'>Submit</button>
                </div>
                <p>Alredy have account ?| <Link href='/Login'>Login</Link></p>
            </form>
        </div>
    )
}