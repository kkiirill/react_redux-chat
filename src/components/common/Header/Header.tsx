import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setShowNewChat } from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";
import "./Header.scss";
export const Header: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();
 
  const handleShowNewChat = () => {
    dispatch(setShowNewChat(true))
  }
  return (
    <header className="header">
      <div className="header__icons">
        <IconUser img={user?.photoURL} />
      
      <img src={require('../../../images/message.png')} alt="message" className="header__icon-message" onClick={handleShowNewChat}/>
      </div>

      <div className="header__search">
        <img
          src={require("../../../images/search.png")}
          className="header__image-search"
          alt="search"
        />
        <input
          type="text"
          placeholder="Search or start a new chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="header__input"
        />
      </div>
    </header>
  );
}

