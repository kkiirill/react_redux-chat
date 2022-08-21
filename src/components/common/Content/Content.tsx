import "./Content.scss";
import { useAppSelector } from "../../../store";
import {ContentInfo }from "../ContentInfo/ContentInfo";
import ContentStart from "../ContentStart/ContentStart";
import { memo } from "react";

export const Content: React.FC = memo(() => {
  const activeListId = useAppSelector((state) => state.chats.activeList);

  return (
    <div className="content-container">
      {activeListId ? <ContentInfo /> : <ContentStart />}
    </div>
  );
})
