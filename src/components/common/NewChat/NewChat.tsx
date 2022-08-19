import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setShowNewChat } from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";
import "./NewChat.scss";
export const NewChat: React.FC = () => {
  const dispatch = useAppDispatch();
  const chatsList = useAppSelector((state) => state.chats.newList);
  const show = useAppSelector((state) => state.chats.showChat);
  const handleCloseChat = () => {
    dispatch(setShowNewChat(false));
  };
  return (
    <div className="new-chat" style={{ left: show ? "0" : "-1000px" }}>
      <div className="new-chat__header">
        <div className="new-chat__button" onClick={handleCloseChat}>
          <img
            src={require("../../../images/back.png")}
            alt=""
            className="new-chat__image"
          />
        </div>
        <div className="new-chat__title">New Chat</div>
      </div>
      <ul className="new-chat__list">
        {chatsList?.map((item: any) => (
          <li className="new-chat__list-item" key={item.id}>
            <IconUser img={item.image} />
            <p className="new-chat__item-name">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
