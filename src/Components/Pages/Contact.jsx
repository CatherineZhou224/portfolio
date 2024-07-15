import Nav from "../UI Components/Nav";
import Aside from "../UI Components/Aside";
import { useState } from "react";
export default function Contact() {
  const [currentPage] = useState("Contact");
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main>
        <Aside></Aside>
        <div className="main-content">
          <section style={{ scrollBehavior: "smooth" }}>
            <section className="contact" data-page="contact">
              <header>
                <h2 className="h2 article-title">Contact</h2>
                <section className="mapbox" data-mapbox="true">
                  <figure>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.11834608553!2d-122.1162834571585!3d37.54853968940837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6f95d1db1b1%3A0x8b15d3052a3c77fd!2sFremont%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                      width="400"
                      height="300"
                      loading="lazy"
                      title="Google Map"
                    ></iframe>
                  </figure>
                </section>
                <section className="contact-form">
                  <h3 className="h3 form-title">Contact Form</h3>
                  <form action="#" className="form" data-form="true">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="fullname"
                        className="form-input"
                        placeholder="Full name"
                        required=""
                        data-form-input="true"
                      />
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email address"
                        required=""
                        data-form-input="true"
                      />
                    </div>
                    <textarea
                      name="message"
                      className="form-input"
                      placeholder="Your Message"
                      required=""
                      data-form-input="true"
                    ></textarea>
                    <button
                      className="form-btn"
                      type="submit"
                      data-form-btn="true"
                    >
                      <ion-icon name="paper-plane"></ion-icon>
                      <span>Send Message</span>
                    </button>
                  </form>
                </section>
              </header>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
