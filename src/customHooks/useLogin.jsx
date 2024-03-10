import { useRef, useState } from "react";
import { fullNameValidation,emailValidation,passwordValidation } from "../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userData";

const useLogin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const lightMode=useSelector(store=>store.theme.theme)
  let userNameText = useRef(null);
  let emailText = useRef(null);
  let passwordText = useRef(null);
  const [signInError,setSignInError]=useState("");
  let [userNameError, setUserNameError] = useState(null);
  let [emailError, setEmailError] = useState(null);
  let [passwordError, setPasswordError] = useState(null);
  const handleSignUp=()=>{
    
      createUserWithEmailAndPassword(auth, emailText.current.value, passwordText.current.value)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: userNameText.current.value,
        }).then(() => {
          const {uid,email,displayName}=auth.currentUser;
          console.log(auth.currentUser)
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/mainpage")
        }).catch((error) => {
          // An error occurred
          // ...
          console.log("this did not work")
        });
      // Signed up 
      const user = userCredential.user;

      // ...
       })
      .catch((error) => {
       // ..
       });
    
  }
  const handleSignIn=()=>{
 
      signInWithEmailAndPassword(auth, emailText.current.value, passwordText.current.value)
        .then((userCredential) => {
          // Signed in 
          navigate("/mainpage")
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setSignInError("Account is not registered. Please Check")
        });
        
     }
  
  const submitForm = () => {
    if (!signIn){
      const nameValidationError = fullNameValidation(userNameText.current.value);
      const emailValidationError = emailValidation(emailText.current.value);
      const passwordValidationError = passwordValidation(passwordText.current.value);
      setUserNameError(nameValidationError);
      setEmailError(emailValidationError);
      setPasswordError(passwordValidationError);
      if(nameValidationError === null && emailValidationError ===null && passwordValidationError ===null){
      handleSignUp()
      }else{
        return
      }
    }else{
      //sign in
     const emailValidationError = emailValidation(emailText.current.value);
     const passwordValidationError = passwordValidation(passwordText.current.value);
     
    //  setEmailError(emailValidationError);
    //  setPasswordError(passwordValidationError);
     if(emailValidationError===null && passwordValidationError===null){
     handleSignIn()
     }else{
      setSignInError("Your email or password is not correct.")
      return
      
     }
    }
  };
  const [signIn,setSignUp]=useState(false);
  const handleToggle=()=>{
    setSignUp(!signIn)
    if(!signIn){
      setUserNameError("")
      setEmailError("")
      setPasswordError("")
      emailText.current.value="";
      passwordText.current.value="";
      setSignInError("")
    }

    else{
      setEmailError("")
      setPasswordError("")
      emailText.current.value="";
      passwordText.current.value="";
    }
  }
  return {lightMode,signIn,signInError,userNameText,emailText,passwordText,submitForm,handleToggle,userNameError,emailError,passwordError}
}

export default useLogin