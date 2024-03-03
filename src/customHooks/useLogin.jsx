import { useRef, useState } from "react";
import { fullNameValidation,emailValidation,passwordValidation } from "../utils/validation";

const useLogin = () => {
    const userNameText=useRef(null);    
    const emailText=useRef(null);
    const passwordText=useRef(null);
    const [userNameError,setUserNameError]=useState(null)
    const [emailError,setEmailError]=useState(null)
    const [passwordError,setPasswordError]=useState(null)
    const nameValidationError=fullNameValidation(userNameText.current.value);
    setUserNameError(nameValidationError)
    const emailValidationError=emailValidation(emailText.current.value)
    setEmailError(emailValidationError)
    const passwordValidationError=passwordValidation(passwordText.current.value);
    setPasswordError(passwordValidationError)
  return {
    userNameText,emailText,passwordText,userNameError,emailError,passwordError
  }
}

export default useLogin