import "./ContentInfo.scss";
import { IconUser } from "../../UI/Icon/IconUser";
import { Messages } from "../Messages/Messages";
import EmojiPicker from "emoji-picker-react";
import { KeyboardEvent, memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setMessages } from "../../../store/slices/messagesSlice";
import { db, sendMessage } from "../../../api/api";
import { setUsers } from "../../../store/slices/userSlice";

export const ContentInfo: React.FC = memo(() => {
  const activeChat = useAppSelector((state) => state.chats.activeList);
  const user = useAppSelector((state) => state.user);
  const users = useAppSelector((state) => state.user.users);
  const [emojiShow, setEmojiShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    return db
      .collection("chats")
      .doc(activeChat?.chatId)
      .onSnapshot((doc: { exists: any; data: () => any }) => {
        if (doc.exists) {
          const data = doc.data();

          if (data?.messages) {
            dispatch(setMessages(data.messages));
            dispatch(setUsers(data.users));
          }
        }
      });
  }, [activeChat.chatId]);
  const handleEmoji = (e: any, emojiObj: { emoji: any }) => {
    setSearch(search + emojiObj.emoji);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };
  const handleSend = () => {
    if (search !== "") {
      sendMessage(activeChat, user.id, "text", search, users);
      setSearch("");
      setEmojiShow(false);
    }
  };
  return (
    <div className="content-info">
      <div className="content-info__header">
        <IconUser img={activeChat.image} />
        <p className="content-info__name">{activeChat?.title}</p>
      </div>
      <main className="content-info__main">
        <Messages />
      </main>
      <div
        className="emoji-content"
        style={{ height: emojiShow ? "220px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmoji}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="content-info__send">
        <div
          className="content-info__emoji"
          onClick={() => setEmojiShow(!emojiShow)}
        >
          {!emojiShow ? (
            <img
              src={require("../../../images/emoji.png")}
              alt="emoji"
              className="emoji"
            />
          ) : (
            <img
              src={require("../../../images/close.png")}
              alt="emoji"
              className="emoji"
              onClick={() => setEmojiShow(!emojiShow)}
            />
          )}
        </div>
        <div className="content-info__input">
          <input
            type="text"
            placeholder="Type your message"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e)}
            className="content-info__search"
          />

          <div className="content-info__send-icon">
            <img
              src={require("../../../images/send.png")}
              alt="send"
              className="send"
              onClick={handleSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
