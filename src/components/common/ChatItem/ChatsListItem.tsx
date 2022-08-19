import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveList } from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";
import "./ChatsListItem.scss";
interface Props {
  chat: any;
  active: boolean;
}

export const ChatsListItem: React.FC<Props> = ({ chat, active }) => {
  const dispatch = useAppDispatch();
  const addIdActiveChat = () => {
    dispatch(
      setActiveList({
        id: chat.id,
      })
    );
  };

  return (
    <li
      className={`chatslist-item ${active ? "active" : ""}`}
      onClick={addIdActiveChat}
    >
      <IconUser img={chat.image}/>
      <div className="chatslist-item__info ">
        <div className="chatslist-item__text">
          <p className="chatslist-item__name">{chat.name}</p>
          <p className="chatslist-item__date">19.04 </p>
        </div>
        <div className="chatlist-item__text">
          <div className="chatslist-item__message">
            <p>{chat.message}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
