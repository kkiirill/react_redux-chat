import "./ChatsList.scss";
import { ChatsListItem } from "../ChatItem/ChatsListItem";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setChatsList } from "../../../store/slices/chatsListSlice";
import { memo, useEffect } from "react";
import { db } from "../../../api/api";
import "firebase/firebase-firestore";

export const ChatsList: React.FC = memo(()=> {
  const chatsList = useAppSelector((state) => state.chats.modifiedList);
  const activeListId = useAppSelector((state) => state.chats.activeList);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user !== null) {
      return db
        .collection("users")
        .doc(user.id)
        .onSnapshot((doc) => {
          if (doc.exists) {
            const data = doc.data();

            if (data?.chats) {
              const chats = [...data?.chats].sort((a, b) => {
                if (a.lastMessageDate === undefined) {
                  return -1;
                } else if (b.lastMessageDate === undefined) {
                  return -1;
                } else if (
                  a.lastMessageDate.seconds < b.lastMessageDate.seconds
                ) {
                  return 1;
                } else {
                  return -1;
                }
              });
              dispatch(setChatsList(chats));
            }
          }
        });
    }
  }, [user]);
  return (
    <div className="chats-list">
      <h2 className="chats-list__title wrapper">Chats</h2>
      <div>
        <ul className="chats-list__content">
          {chatsList?.map((item: any) => (
            <ChatsListItem
              chat={item}
              key={item.chatId}
              active={activeListId === item.chatId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
})
