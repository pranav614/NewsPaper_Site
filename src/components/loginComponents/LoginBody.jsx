import React from 'react'
import useLogin from '../../customHooks/useLogin';

const LoginBody = () => {
  const {lightMode,signIn,signInError,userNameText,emailText,passwordText,submitForm,handleToggle,userNameError,emailError,passwordError}=useLogin();
  return (
    <div className='w-full flex justify-center login_container'>
        <form action="" onClick={(e)=>e.preventDefault()}>
            <div className={`${lightMode?'bg-white':'bg-black'} mt-10  p-10 py-14`}>      
            <div className='flex flex-col justify-center items-center gap-3 w-[460px] '>
            <h1 className={` heading  ${!lightMode?'text-white':'text-black'}`}> {!signIn ?"SIGN UP":"SIGN IN"} </h1>
            <p className={`   ${!lightMode?'text-white':'text-black'}`}>Welcome to the News Site. To access its features, kindly {!signIn ?"Sign Up":"Sign In"}.</p>
            <div className='w-[280px] flex flex-col gap-3' >
              <p  className=' text-red-500 text-sm'>{signInError}</p>
            {!signIn&& <div ><input ref={userNameText} className={`LoginInputs w-full p-2 ${!lightMode?'bg-[#1F2328] text-white':''}`} type="User Name" placeholder='User Name' /><p className=' text-red-500 text-sm'>{userNameError}</p></div> }
            <div><input ref={emailText} className={`LoginInputs w-full p-2 ${!lightMode?'bg-[#1F2328] text-white':''}`} type="email" placeholder='Email Address' /><p className=' text-red-500 text-sm'>{emailError}</p></div>
            <div><input ref={passwordText} className={`LoginInputs w-full p-2 ${!lightMode?'bg-[#1F2328] text-white':''}`} placeholder='Password' type="password" /><p className=' text-red-500 text-sm'>{passwordError}</p></div>
            </div>
          
            <p className={`   ${!lightMode?'text-white':'text-black'}`}>{!signIn?"Aready a member?":"Not a member?"} <strong className=' cursor-pointer' onClick={handleToggle}>{!signIn? "Sign In":"Sign Up"}</strong></p>
            <div className="wrapper mt-2" onClick={submitForm}>
            <div className='subBtn' ><span>{!signIn ?"Create Account":"Sign In"}</span></div>
           </div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default LoginBody