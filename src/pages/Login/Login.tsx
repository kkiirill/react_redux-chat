import "./Login.scss";
import { googlePopup } from "../../api/api";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

export const Login: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await googlePopup();

      dispatch(
        setUser({
          email: response.user?.email,
          name: response.user?.displayName,
          image: response.user?.photoURL,
          id: response.user?.uid,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <button className="loginBtn loginBtn--google" onClick={handleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
});
