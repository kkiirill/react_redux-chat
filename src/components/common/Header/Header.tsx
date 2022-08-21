import { memo, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setModifiedList,
  setShowNewChat,
} from "../../../store/slices/chatsListSlice";
import { IconUser } from "../../UI/Icon/IconUser";
import "./Header.scss";
export const Header: React.FC = memo(() => {
  const user = useAppSelector((state) => state.user);
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleShowNewChat = () => {
    dispatch(setShowNewChat(true));
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentInput = e.currentTarget.value;
      setSearch(currentInput);
      dispatch(setModifiedList(search));
    },
    [dispatch, search]
  );

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="header__icons">
        <IconUser img={user?.image} />
        <div>
          <img
            src={require("../../../images/logout.png")}
            alt="message"
            className="header__icon-message"
            onClick={logout}
          />
          <img
            src={require("../../../images/message.png")}
            alt="message"
            className="header__icon-message"
            onClick={handleShowNewChat}
          />
        </div>
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
          onChange={handleChange}
          className="header__input"
        />
      </div>
    </header>
  );
});
