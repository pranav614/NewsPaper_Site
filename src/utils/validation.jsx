export const fullNameValidation=(name)=>{
    const nameRegEx=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    return !nameRegEx.test(name)?"This is not correct a name":"";
}
export const emailValidation=(email)=>{
    const emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return !emailRegEx.test(email)?"this is not correct email":"";
}
export const passwordValidation=(password)=>{
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return !passwordRegex.test(password)?"this is not correct password":""
}
