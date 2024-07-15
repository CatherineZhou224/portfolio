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
                  I'm Creative Director and UI/UX Designer from Sydney,
                  Australia, working in web development and print media. I enjoy
                  turning complex problems into simple, beautiful and intuitive
                  designs.
                </p>
                <p>
                  My job is to build your website so that it is functional and
                  user-friendly but at the same time attractive. Moreover, I add
                  personal touch to your product and make sure that is
                  eye-catching and easy to use. My aim is to bring across your
                  message and identity in the most creative way. I created web
                  design for many famous brand companies.
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
                    <img src="images/photo-1.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-2.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-3.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-4.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-5.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-6.jpeg" alt="picture" />
                  </li>
                  <li className="photos-item">
                    <img src="images/photo-7.jpeg" alt="picture" />
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
