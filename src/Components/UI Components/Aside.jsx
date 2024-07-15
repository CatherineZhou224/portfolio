export default function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/avatar.png" width="80" />
        </figure>
        <div className="info-content">
          <div
            className="name"
            style={{ display: "flex", fontSize: "1.2rem", gap: "0.5rem" }}
          >
            <h1
              style={{
                fontWeight: "700",
                color: "#ea5600",
                textDecoration: "underline",
              }}
            >
              Catherine
            </h1>
            <h1 style={{ fontWeight: "100" }}>Zhou</h1>
          </div>

          <p className="title">UX Designer</p>
          <p style={{ color: "white", textAlign: "center" }}>+</p>
          <p className="title">Web developer</p>
        </div>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M375.4 17.744l-78 25.998V265.73l14-3.5V94.64l64-20zM433.3 126.31L329.4 152.282v124l-38.815 9.703-11.184 2.797v-124L207.29 182.81c5.175 3.946 9.705 8.82 13.513 14.323 10.15 14.657 16.29 33.678 20.427 54.357 7.38 36.9 8.056 78.79 8.125 110.252l238.012-59.504c-.043-31.71-.572-75.13-7.79-111.217-3.863-19.32-9.72-36.3-17.573-47.64-7.664-11.072-16.21-16.8-28.702-17.07zM176.4 190.255c-13.374 0-22.212 5.21-29.91 15.047-7.7 9.838-13.472 24.664-17.304 41.906-.835 3.755-1.572 7.622-2.236 11.558l93.107-18.622v-.002c-.45-1.635-.92-3.243-1.406-4.822-.48-1.562-.975-3.094-1.487-4.595l-.016-.05c-.013-.04-.028-.076-.04-.115-.478-1.393-.973-2.756-1.48-4.093l-.15-.402c-.522-1.366-1.055-2.705-1.607-4.008-.046-.108-.095-.212-.14-.32-.502-1.172-1.018-2.313-1.544-3.43l-.39-.826c-.17-.353-.34-.705-.514-1.052-.284-.57-.572-1.134-.863-1.688-.087-.162-.17-.33-.255-.49-.392-.734-.792-1.448-1.196-2.15-.12-.208-.24-.41-.36-.614-.305-.52-.614-1.032-.926-1.533-.128-.206-.257-.412-.386-.615-.427-.67-.858-1.328-1.297-1.963-7.852-11.344-16.6-17.124-29.6-17.124zm26.298 71.72l-87.723 17.544 43.862 14.933zm23.025 5.346l-63.758 47.21L89.4 289.827v68.332l141.607-24.414c-.562-21.47-1.945-44.85-5.284-66.422zm5.56 84.637l-37.273 6.427 37.338 4.668c-.01-3.564-.03-7.294-.064-11.096zm128.118.823l-30 7.5v133.973h30zm-226.378 16.12l-61.62 10.626v-6.612c-14.426 4.543-27.058 10.895-35.476 17.44-7.943 6.18-11.202 12.364-11.28 14.482-.04 1.06-.01 1.492 1.292 2.853 1.25 1.307 4.112 3.166 8.813 4.81 79.575 13.055 124.014-7.656 175.34-33.966z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:cathzhou@umich.edu" className="contact-link">
                cathzhou@umich.edu
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M170.738 311.468c8.07-42.15 99.697-131.543 138.247-138.247 11.314 11.314 33.94 33.942 56.57 33.942l79.195-79.196c0-22.628-35.103-49.413-56.57-56.57C272.583 32.865 32.865 272.583 71.398 388.182c7.156 21.467 33.94 56.57 56.57 56.57l79.195-79.196c0-22.628-25.11-42.772-36.424-54.086z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+173342776404" className="contact-link">
                +1 (734) 277-6404
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M119 31v66h18V31h-18zm256 0v66h18V31h-18zM73 89v30h366V89h-28v26h-54V89H155v26h-54V89H73zm0 48v302h366V137H73zm110 14h18v32h46v-32h18v32h46v-32h18v32h46v-32h18v32h32v18h-32v46h32v18h-32v46h32v18h-32v46h32v18H265v32h-18v-32h-46v32h-18v-32h-46v32h-18v-32H87v-18h32v-46H87v-18h32v-46H87v-18h32v-46H87v-18h96v-32zm-46 50v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm-192 64v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v13.27c2.545-5.936 7.334-10.725 13.27-13.27H265zm32.73 0c5.936 2.545 10.725 7.334 13.27 13.27V265h-13.27zm31.27 0v46h46v-46h-46zm-41 16c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zm-23 16.73V311h13.27c-5.936-2.545-10.725-7.334-13.27-13.27zm46 0c-2.545 5.936-7.334 10.725-13.27 13.27H311v-13.27zM137 329v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">MBTI</p>
              <span>INFP - Mediator</span>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M217 25v14h78V25h-78zm0 32v46h14V71h50v32h14V57h-78zm32 32v14h14V89h-14zm-64 32v46h30v-46h-30zm48 0v14h46v-14h-46zm64 0v46h30v-46h-30zm-64 32v14h46v-14h-46zm-80 32v46h62v-46h-62zm80 0v14h46v-14h-46zm64 0v46h62v-46h-62zm-64 32v14h46v-14h-46zm-112 32v46h94v-46h-94zm112 0v14h46v-14h-46zm64 0v46h94v-46h-94zm-64 32v14h46v-14h-46zM89 313v46h126v-46H89zm144 0v14h46v-14h-46zm64 0v46h126v-46H297zm-64 32v14h46v-14h-46zM57 377v46h158v-46H57zm176 0v14h46v-14h-46zm64 0v46h158v-46H297zm-64 32v14h46v-14h-46zM25 441v46h190v-46H25zm208 0v14h46v-14h-46zm64 0v46h190v-46H297zm-64 32v14h46v-14h-46z"></path>
              </svg>
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Fremont, California, USA</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="http://linkedin.com/in/jie-catherine-zhou"
              aria-label="Link to Linkedin"
              className="social-link"
            >
              <i aria-hidden="true" className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/CatherineZhou224"
              aria-label="Link to Github"
              className="social-link"
            >
              <i aria-hidden="true" className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/catherine_zzhou/"
              aria-label="Link to Instagram"
              className="social-link"
            >
              <i aria-hidden="true" className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
