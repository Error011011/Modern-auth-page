
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignIn = () => {

const {register, handleSubmit} = useForm()
const onSubmit = data => console.log(data)


  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='title-1'>Sign In</h1>
            <div className="social-icons">
                <a href="#" className='icon'><FaGoogle /></a>
                <a href="#" className='icon'><FaFacebookF /></a>
                <a href="#" className='icon'><FaGithub /></a>
                <a href="#" className='icon'><FaLinkedinIn /></a>
            </div>
    
            <span className='span'>or use your email for registration</span>
    
            <div>
                <input className='input' {...register('email', {required: true})} placeholder='email' type='email'/>
                <input className='input' {...register('password', {required: true})} placeholder='password' type='password'/>
    
                <div className='form-actions'>
                    <a href="#">Forget your password</a>
                    <button type='submit'>Login</button>
                </div>

    
            </div>  
            
    
        </form>
  )
}

export default SignIn