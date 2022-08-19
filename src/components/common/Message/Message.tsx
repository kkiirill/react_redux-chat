import "./Message.scss";
import { useAppSelector } from "../../../store";
interface Props {
  message: any;
}

export const Message: React.FC<Props> = ({ message }) => {
  const user = useAppSelector((state) => state.user.info);
  return (
    <div
      style={
        { justifyContent: user.id === message.author ? "flex-end" : "flex-start", display: "flex" }
      }
      className="message"
    >
      <div className="message__content" style={{backgroundColor: user.id === message.author ? '#69deff' : '#fff'}}>
        <p className="message__text">{message.text}</p>
        <p className="message__date">15:00</p>
      </div>
    </div>
  );
};
