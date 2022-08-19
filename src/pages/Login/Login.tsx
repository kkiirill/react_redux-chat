import "./Login.scss";
import { googlePopup } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await googlePopup();
      dispatch(
        setUser({
          email: response?.user.email,
          fullName: response?.user.displayName,
          photoURL: response?.user.photoURL,
          id: response?.user.uid,
        })
      );
      navigate("/");
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
