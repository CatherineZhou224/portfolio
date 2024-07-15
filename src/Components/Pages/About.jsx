import Aside from "../UI Components/Aside";
import Nav from "../UI Components/Nav";
import cardData from "../../data/cardData";
import Card from "../UI Components/Card";
import { useState } from "react";
export default function About() {
  const [currentPage] = useState("About");
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main>
        <Aside></Aside>
        <div className="main-content">
          <section style={{ scrollBehavior: "smooth" }}>
            <article className="about  active" data-page="about">
              <header>
                <h2 className="h2 article-title">About me</h2>
                <div className="underline"></div>
              </header>
              <section className="about-text">
                <p>
                  I'm an inspired{" "}
                  <span style={{ display: "inline", fontSize: "larger" }}>
                    <strong>
                      <em>Web Developer</em>
                    </strong>
                  </span>{" "}
                  and{" "}
                  <span style={{ display: "inline", fontSize: "larger" }}>
                    <strong>
                      <em>UI/UX Designer</em>
                    </strong>
                  </span>{" "}
                  , currently studying Information Science at University of
                  Michigan, Ann Arbor, focusing on the track of{" "}
                  <span style={{ display: "inline", fontSize: "larger" }}>
                    <strong>Agile Development</strong>
                  </span>{" "}
                  . I enjoy turning the imaginative and{" "}
                  <span style={{ display: "inline", fontSize: "larger" }}>
                    <strong>
                      <em>innovative designs</em>
                    </strong>
                  </span>{" "}
                  into tangible,{" "}
                  <span style={{ display: "inline", fontSize: "larger" }}>
                    <strong>
                      <em>real-world interactions</em>
                    </strong>
                  </span>{" "}
                  . Building inclusive and empowering solutions for all of the
                  users.
                </p>
              </section>
              <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                  {cardData.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </ul>
              </section>
              <section className="photos">
                <h3 className="h3 photos-title">photo Gallery</h3>
                <ul className="photos-list has-scrollbar">
                  <li className="photos-item">
                    <img src="images/photo-1.jpeg" alt="tahoe" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-2.jpeg" alt="pigeon" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-3.jpeg" alt="aquarium" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-4.jpeg" alt="chicago sunset" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-5.jpeg" alt="sun shine on river" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-6.jpeg" alt="sea coast" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-7.jpeg" alt="ice mountain" />
                  </li>
                </ul>
              </section>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
