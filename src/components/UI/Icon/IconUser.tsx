import { memo } from "react";
import "./IconUser.scss";
interface Props {
  img: string;
}

export const IconUser: React.FC<Props> = memo(({ img }) => {
  return (
    <div className="icon">
      <img
        src={img ? img : require("../../../images/user.png")}
        alt=""
        className="icon__user"
      />
      <img
        src={require("../../../images/online-status.png")}
        alt=""
        className="icon__status"
      />
    </div>
  );
});
