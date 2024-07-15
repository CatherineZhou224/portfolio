import Nav from "../UI Components/Nav";
import { useState } from "react";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProjectCard from "../UI Components/ProjectCard";
import projectCardData, { filteredData } from "../../data/projectCardData";

export default function Portfolio() {
  const [text] = useTypewriter({
    words: [" Inspired.", " Interactive.", " Innovative.", " Inclusive."],
    loop: {},
    deleteSpeed: 20,
  });
  const [currentPage] = useState("Portfolio");
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === "all") {
      setProjects(projectCardData);
    } else {
      setProjects(filteredData(activeTab));
    }
  }, [activeTab]);

  return (
    <div>
      <Nav currentPage={currentPage}></Nav>
      <main>
        <div className="main-content portfolio-content">
          <header style={{ textAlign: "center" }}>
            <h2 className="header-text">
              Be
              <br className="text-break" />
              <span className="typed-text font-italic text-serif font-weight-light">
                {text}
              </span>
              <Cursor />
            </h2>
          </header>
          <div className="menu">
            <div
              className={`item ${activeTab === "all" ? "active" : ""}`}
              onClick={() => handleTabClick("all")}
            >
              All
            </div>
            <div
              className={`item ${
                activeTab === "web development" ? "active" : ""
              }`}
              onClick={() => handleTabClick("web development")}
            >
              Web Development
            </div>
            <div
              className={`item ${
                activeTab === "mobile development" ? "active" : ""
              }`}
              onClick={() => handleTabClick("mobile development")}
            >
              Mobile Development
            </div>
            <div
              className={`item ${
                activeTab === "product research & design" ? "active" : ""
              }`}
              onClick={() => handleTabClick("product research & design")}
            >
              Product Research & Design
            </div>
          </div>
          <div
            className="project-card-container"
            style={{ position: "relative", marginTop: "3.5rem" }}
          >
            {projects.map((item, index) => (
              <ProjectCard key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
