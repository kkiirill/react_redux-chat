import "./ContentInfo.scss";
import { IconUser } from "../../UI/Icon/IconUser";
import Messages from "../Messages/Messages";
import EmojiPicker, { IEmojiData } from "emoji-picker-react";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addMessage } from "../../../store/slices/messagesSlice";

export default function ContentInfo() {
  const messageText = useAppSelector((state) => state.messages.text);
  const [emojiShow, setEmojiShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleEmoji = (e: any, emojiObj: { emoji: any }) => {
    setSearch(search + emojiObj.emoji);
  };

  useEffect(() => {

  }, [])

  console.log(messageText);
  return (
    <div className="content-info">
      <div className="content-info__header">
        <IconUser img={""} />
        <p className="content-info__name">Miky Tyson</p>
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
            className="content-info__search"
          />

          <div className="content-info__send-icon">
            <img
              src={require("../../../images/send.png")}
              alt="send"
              className="send"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
