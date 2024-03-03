import React, { useRef } from 'react'
import { useState } from 'react';
import { emailValidation, fullNameValidation, passwordValidation } from '../../utils/validation';
// import useValidation from '../../customHooks/useLogin'

const LoginBody = () => {
  
  // const {userNameText,emailText,passwordText,nameValidationError,emailValidationError,passwordValidationError}=useValidation()
  const userNameText = useRef(null);
  const emailText = useRef(null);
  const passwordText = useRef(null);
  let [userNameError, setUserNameError] = useState(null);
  let [emailError, setEmailError] = useState(null);
  let [passwordError, setPasswordError] = useState(null);

  const submitForm = () => {
    if (!signIn){
      const nameValidationError = fullNameValidation(userNameText.current.value);
      const emailValidationError = emailValidation(emailText.current.value);
      const passwordValidationError = passwordValidation(passwordText.current.value);
      setUserNameError(nameValidationError);
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
      console.log(userNameText,emailText,passwordText)
      console.log(nameValidationError, emailValidationError, passwordValidationError);
    }else{
      const emailValidationError = emailValidation(emailText.current.value);
     const passwordValidationError = passwordValidation(passwordText.current.value);
     setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
    }
  };
  const [signIn,setSignUp]=useState(false);
  const handleToggle=()=>{
    setSignUp(!signIn)
    if(!signIn){
      setUserNameError("")
      setEmailError("")
      setPasswordError("")
    }

    else{
      setEmailError("")
      setPasswordError("")
    }
  }
  return (
    <div className='w-full flex justify-center login_container'>
        <form action="" onClick={(e)=>e.preventDefault()}>
            <div className='bg-white mt-10  p-10 py-14'>      
            <div className='flex flex-col justify-center items-center gap-3 w-[460px] '>
            <h1 className=' heading'> {!signIn ?"SIGN UP":"SIGN IN"} </h1>
            <p className=' text-[#5D637F]'>Welcome to the News Site. To access its features, kindly {!signIn ?"Sign Up":"Sign In"}.</p>
            <div className='w-[280px] flex flex-col gap-3' >
            {!signIn&& <div ><input ref={userNameText} className='LoginInputs w-full p-2' type="User Name" placeholder='User Name' /><p className=' text-red-500 text-sm'>{userNameError}</p></div> }
            <div><input ref={emailText} className='LoginInputs w-full p-2' type="email" placeholder='Email Address' /><p className=' text-red-500 text-sm'>{emailError}</p></div>
            <div><input ref={passwordText} className='LoginInputs w-full p-2' placeholder='Password' type="password" /><p className=' text-red-500 text-sm'>{passwordError}</p></div>
            </div>
          
            <p>{!signIn?"Aready a member?":"Not a member?"} <strong className=' cursor-pointer' onClick={handleToggle}>{!signIn? "Sign In":"Sign Up"}</strong></p>
            <div className="wrapper" onClick={submitForm}>
            <a href ><span>{!signIn ?"Create Account":"Sign In"}</span></a>
           </div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default LoginBody