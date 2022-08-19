import Chats from "../Chats/ChatsList";
import { Header } from "../Header/Header";
import{ NewChat} from "../NewChat/NewChat";
import "./Sidebar.scss";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <NewChat />
      <Header />
      <Chats />
    </div>
  );
}
