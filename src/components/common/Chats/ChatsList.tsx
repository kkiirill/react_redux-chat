import "./ChatsList.scss";
import { ChatsListItem } from "../ChatItem/ChatsListItem";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveList } from "../../../store/slices/chatsListSlice";

export default function ChatsList() {
  const chatList = useAppSelector((state) => state.chats.list);
  const activeListId = useAppSelector((state) => state.chats.activeList);
  return (
    <div className="chats-list">
        <h2 className="chats-list__title wrapper">Chats</h2>
        <div>
          <ul className="chats-list__content">
            {chatList.map((item: any) => (
              <ChatsListItem
                chat={item}
                key={item.id}
                active={activeListId === item.id}
              />
            ))}
          </ul>
        </div>
    </div>
  );
}
