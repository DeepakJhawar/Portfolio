/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "StudySphere",
    description:
      "A web app for students to connect online and learn things together with features like video conferencing, chatting etc.",
    url: "https://github.com/DeepakJhawar/StudySphere_mvc",
  },
  {
    title: "Simple Note Maker",
    description:
      "Create a simple Note Maker showing my skills in react js, currently building a social media platform using react.",
    url: "https://github.com/DeepakJhawar/Note-maker",
  },
  {
    title: "Simon Game",
    description:
      "Developed an interactive web-based game using HTML, CSS and JavaScript, challenging players to remember and repeat sequences of colors and sounds.",
    url: "https://github.com/DeepakJhawar/simon-game",
  },
  {
    title: " DrumKit",
    description:
      " Created a web application using HTML, CSS, and Javascript, simulating a virtual drum kit with interactive drum sounds triggered by keyboard or mouse input.",
    url: "https://github.com/DeepakJhawar/Drum-kit",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
