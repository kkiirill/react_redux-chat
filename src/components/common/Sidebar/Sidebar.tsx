import { memo } from "react";
import { ChatsList } from "../Chats/ChatsList";
import { Header } from "../Header/Header";
import { NewChat } from "../NewChat/NewChat";
import "./Sidebar.scss";
export const Sidebar: React.FC = memo(() => {
  return (
    <div className="sidebar-container">
      <NewChat />
      <Header />
      <ChatsList />
    </div>
  );
});
