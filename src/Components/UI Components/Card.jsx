export default function Card({ item }) {
  const { img, title, content } = item;
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={`/images/${img}`} alt="Web design icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{content}</p>
      </div>
    </li>
  );
}
