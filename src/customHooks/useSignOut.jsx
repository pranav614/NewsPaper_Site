import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { removeUser } from "../redux/userData";

const useSignOut=()=>{
    const userName = useSelector((store) => store.user?.displayName) || "";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toogleSignOut = () => {
      signOut(auth)
        .then(() => {
          dispatch(removeUser());
        })
        .catch((error) => {
          // An error happened.
        });
      navigate("/");
    };
    return {userName,toogleSignOut}
}
export default useSignOut;