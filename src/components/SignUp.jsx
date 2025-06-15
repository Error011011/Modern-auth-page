
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {

    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)

    
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='title-1'>Create account</h1>
        <div className="social-icons">
            <a href="#" className='icon'><FaGoogle /></a>
            <a href="#" className='icon'><FaFacebookF /></a>
            <a href="#" className='icon'><FaGithub /></a>
            <a href="#" className='icon'><FaLinkedinIn /></a>
        </div>

        <span className='span'>or use your email for registration</span>

        <div className='input-wrapper'>
            <input  className='input'{...register('name', {required: true}, )} placeholder='name' type='text'/>
            <input className='input' {...register('email', {required: true})} placeholder='email' type='email'/>
            <input className='input' {...register('password', {minLength: 5})} placeholder='password' type='password'/>

        </div>  
            <button type='submit'>Register</button>

        

    </form>
  )
}

export default SignUp