import React from 'react'
import LoginHeader from './LoginHeader'
import LoginBody from './LoginBody'
import lightImage1 from '../../images/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg'
import { useSelector } from 'react-redux'
import darkmodeImage from '../../images/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9530.avif'
const Login = () => {
  const lightMode=useSelector(store=>store.theme.theme)
  return (
    <div>
        <img className='w-full h-full absolute z-[-99]' src={lightMode?lightImage1:darkmodeImage} alt="" />
        <div>
            <LoginHeader/>
            <LoginBody/>
        </div>
    </div>
  )
}

export default Login