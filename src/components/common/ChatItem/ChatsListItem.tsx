import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store";
import { setActiveList } from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";
import "./ChatsListItem.scss";
interface Props {
  chat: any;
  active: boolean;
}

export const ChatsListItem: React.FC<Props> = memo(({ chat, active }) => {

  const [time, setTime] = useState<any>("");
  useEffect(() => {
    if (chat.lastMessageDate > 0) {
      const date = new Date(chat.lastMessageDate.seconds * 1000);
      let h: any = date.getHours();
      let m: any = date.getMinutes();
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      setTime(`${h}: ${m}`);
    }
  }, [chat]);
  const dispatch = useAppDispatch();
  const addActiveChat = () => {
    dispatch(
      setActiveList({
        chatId: chat.chatId,
        title: chat.title,
        image: chat.image,
        email: chat?.email,
      })
    );
  };
  return (
    <li
      className={`chatslist-item ${active ? "active" : ""}`}
      onClick={addActiveChat}
    >
      
      <IconUser img={chat.image} />
      <div className="chatslist-item__info ">
        <div className="chatslist-item__text">
          <p className="chatslist-item__name">{chat.title}</p>
          <p className="chatslist-item__date">{time}</p>
        </div>
        <div className="chatlist-item__text">
          <div className="chatslist-item__message">
            <p>{chat.lastMessage}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
});
