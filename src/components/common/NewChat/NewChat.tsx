import { memo, useEffect } from "react";
import { addNewChat, getAllContacts } from "../../../api/api";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setContactsChatsList,
  setShowNewChat,
} from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";

import "./NewChat.scss";
export const NewChat: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const chatsList = useAppSelector((state) => state.chats.contactsList);
  const user = useAppSelector((state) => state.user);
  const show = useAppSelector((state) => state.chats.showChat);
  const handleCloseChat = () => {
    dispatch(setShowNewChat(false));
  };
  useEffect(() => {
    const getContactsFromServer = async () => {
      if (user !== null) {
        const result = await getAllContacts();
        const list: { id: string; name: any; image: any; email: any; }[] = [];
        result.forEach((contact) => {
          const data = contact.data();
          if (contact.id !== user.id) {
            list.push({
              id: contact?.id,
              name: data?.name,
              image: data?.image,
              email: data?.email,
            });
          }
        });
        dispatch(setContactsChatsList(list));
      }
    };
    getContactsFromServer();
  }, [user]);
  const createNewChat = async (secondUser: any) => {
    await addNewChat(user, secondUser);
    handleCloseChat();
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
          <li
            className="new-chat__list-item"
            key={item.id}
            onClick={() => createNewChat(item)}
          >
            <IconUser img={item?.image} />
            <p className="new-chat__item-name">{item?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});
