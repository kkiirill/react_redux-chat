import "./Message.scss";
import { useAppSelector } from "../../../store";
import { memo, useEffect, useState } from "react";
interface Props {
  message: any;
}

export const Message: React.FC<Props> = memo(({ message }) => {
  const user = useAppSelector((state) => state.user);
  const [time, setTime] = useState<any>("");
  useEffect(() => {
    if (message.lastMessageDate > 0) {
      const date = new Date(message.lastMessageDate.seconds * 1000);
      let d = date.getDay()
      let h: any = date.getHours();
      let m: any = date.getMinutes();
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      setTime(`${h}: ${m}`);
    }
  }, [message]);
  return (
    <div
      style={
        { justifyContent: user.id === message.author ? "flex-end" : "flex-start", display: "flex" }
      }
      className="message"
    >
      <div className="message__content" style={{backgroundColor: user.id === message.author ? '#69deff' : '#fff'}}>
        <p className="message__text">{message.text}</p>
        <p className="message__date">{time}</p>
      </div>
    </div>
  );
});
