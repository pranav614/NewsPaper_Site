export const fullNameValidation=(name)=>{
    const nameRegEx=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    return !nameRegEx.test(name)?"It should contain first and last name":null;
}
export const emailValidation=(email)=>{
    const emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return !emailRegEx.test(email)?"Please enter a valid email address":null;
}
export const passwordValidation=(password)=>{
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return !passwordRegex.test(password)?"Your password must contain between 4 and 60 characters.":null;
}
