import "./Content.scss";
import { useAppSelector } from "../../../store";
import ContentInfo from "../ContentInfo/ContentInfo";
import ContentStart from "../ContentStart/ContentStart";

export default function Content() {
  const activeListId = useAppSelector((state) => state.chats.activeList);
  console.log(activeListId);
  return (
    <div className="content-container">
      {activeListId ? <ContentInfo /> : <ContentStart />}
    </div>
  );
}
