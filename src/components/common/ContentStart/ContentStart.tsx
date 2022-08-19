import "./ContentStart.scss";
export default function ContentStart() {
  return (
    <main className="content-start">
      <img
        src={require("../../../images/start-chat.jpg")}
        className="content-start__image"
        alt=""
      />
      <h1 className="content-start__title">Keep your phone connected</h1>
      <p className="content-start__text">Web connects to your phone sync messages. To reduce data usage, connect your phone to Wi-Fi</p>
    </main>
  );
}
