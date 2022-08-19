import "./Home.scss";
import Content from "../../components/common/Content/Content";
import Sidebar from "../../components/common/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <Content />
    </div>
  );
}
