import React from 'react'
import LoginHeader from './LoginHeader'
import LoginBody from './LoginBody'
import lightImage1 from '../../images/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg'
const Login = () => {
  return (
    <div>
        <img className='w-full h-full absolute z-[-99]' src={lightImage1} alt="" />
        <div>
            <LoginHeader/>
            <LoginBody/>
        </div>
    </div>
  )
}

export default Login