import { Link } from "react-router-dom";

export default function ProjectCard({ item }) {
  const { img, category, type, name, description, achievement, url } = item;
  console.log(category);
  return (
    <div className="card-row">
      <div className="image-container">
        <img className="image" src={`${img}`} alt="xplore" />
      </div>
      <div>
        <div className="text-cat text-sans-serif">
          <span
            className="font-weight-black"
            style={{
              color: "#ea5600",
              display: "inline",
              fontSize: "1.5rem",
              textTransform: "capitalize",
            }}
          >
            {category}
          </span>
          <span
            style={{ fontSize: "1rem", display: "inline", color: "#666666" }}
          >
            / {type}
          </span>
        </div>
        <Link
          className="text-serif text-black"
          to={"/portfolio/petlab"}
          target="_blank"
        >
          <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
        </Link>
        <p className="lead text-sans-serif">{description}</p>
        <span className="card-content text-sans-serif">{achievement}</span>
        <a className="card-btn text-sans-serif" href={url} target="_blank">
          Learn more
        </a>
      </div>
    </div>
  );
}
