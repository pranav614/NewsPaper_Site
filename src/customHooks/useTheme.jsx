import { useDispatch, useSelector } from "react-redux";
import { changedBooleanMode } from "../redux/modeTheme";


const useTheme = () => {
    const dispatch=useDispatch();
    const lightMode = useSelector((store) => store.theme.theme);
  const setMode = () => {
    dispatch(changedBooleanMode());
  };
  return {lightMode,setMode}
}

export default useTheme