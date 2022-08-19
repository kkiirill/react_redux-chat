import "./IconUser.scss";
interface Props {
  img: string;
}

export const IconUser: React.FC<Props> = ({ img }) => {
  return (
    <div className="icon">
      <img
        src={img ? img : require("../../../images/user.png")}
        alt="user"
        className="icon__user"
      />
      <img
        src={require("../../../images/online-status.png")}
        alt="user"
        className="icon__status"
      />
    </div>
  );
};
