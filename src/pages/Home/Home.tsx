import "./Home.scss";
import { Content } from "../../components/common/Content/Content";
import { Sidebar } from "../../components/common/Sidebar/Sidebar";
import { memo } from "react";

export const Home: React.FC = memo(() => {
  return (
    <div className="home-container">
      <Sidebar />
      <Content />
    </div>
  );
});
