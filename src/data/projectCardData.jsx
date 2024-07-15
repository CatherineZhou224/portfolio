const projectCardData = [
  {
    img: "/images/salinaka.png",
    category: "web development",
    type: "self project",
    name: "E-Commerce Website",
    url: "https://cath-salinaka.netlify.app",
    description:
      "An online platform for browsing, comparing, and purchasing tailored glasses.",
    achievement:
      "Implemented by React, Redux, enabled features like adding items to carts, product listings, and detailed product information",
  },
  {
    img: "/images/petlab.png",
    category: "web development",
    type: "course project",
    name: "PetLab",
    url: "https://catherinezhou224.github.io/PetLab",
    description: "An Accessible Website for All Pet Lovers",
    achievement:
      "Features a comprehensive dog breed database. Enter a breed name to view a vivid image and a detailed bar chart of its characteristics, offering quick access to essential information.",
  },
  {
    img: "/images/covilla.png",
    category: "web development",
    type: "self project",
    name: "Covilla",
    url: "https://cath-covilla.netlify.app",
    description: "a website to help you plan your next trip",
    achievement:
      "Embed with smoothy animations like Fading, Sliding Transitions, Sticky Headers, Carousels, Progress Bars etc., aiming to enhance user interaction, making trip planning an enjoyable and engaging experience.",
  },
  {
    img: "/images/homeharbor.png",
    category: "product research & design",
    type: "course project",
    name: "HomeHarbor",
    url: "https://www.figma.com/proto/8W17aON7TW4fxsqMrTJnDQ/High-Fidelity?page-id=328%3A1740&node-id=328-2100&t=c6iZwZC3yvurgI0p-1",
    description:
      "A home decoration e-commerce application that simplifies the furniture journey.",
    achievement:
      "Reduce cognitive load by guiding users through their shopping journey, simplifying the experience, and alleviating decision-making frustration.",
  },
  {
    img: "/images/weatherstack.png",
    category: "web development",
    type: "self project",
    name: "WeatherStack",
    url: "https://cath-weatherstack.netlify.app",
    description: "Website For Real-Time & World Weather Data API",
    achievement:
      "Create a website for a weather data API that highlights its advantages and capabilities.",
  },
  {
    img: "/images/comming.jpg",
    category: "mobile development",
    type: "course project",
    name: "Orient App",
    description: "A Self-Guided Tour App for Everyone.",
    achievement: "Planning...",
  },
];
export default projectCardData;
export function filteredData(category) {
  return projectCardData.filter((item) => item.category === category);
}
