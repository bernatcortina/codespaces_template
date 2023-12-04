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
// import image from "../images/design-desk.jpeg";
import image from "../images/bernat.jpeg";

const imageAltText = "bernat cortina perfile face image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Programació bàsica amb Python",
    description:
      "Introducció a la programació amb Python. Aquest projecte està pensat per als que vulguin iniciar-se en el món de la programació de videojocs.",
    url: "https://bernatcortina.cat",
  },
  {
    title: "Introducció a l'HTML i CSS",
    description:
      "Aprèn com utilitzar HTML i CSS per fer pàgines web. HTML és el llenguatge amb el qual defineixes el contingut i amb CSS, que és el llenguatge de full d’estils, estableixes estil a la pàgina, disseny i molt més.",
    url: "https://tutorial.bernatcortina.cat/",
  },
  {
    title: "Tronca.cat",
    description:
      "Projecte personal i famíliar per donar identitat digital a la família, fent una picada d'ullet a la seva història i tradició.",
    url: "http://tronca.cat/",
  },
  {
    title: "GitHub @bernatcortina",
    description:
      "Respositori personal, on es pot trobar els diferents projectes que he anat fent al llarg dels anys.",
    url: "https://github.com/bernatcortina",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfoli</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "45%", width: "50%", objectFit: "cover", marginLeft: "50%", animation: "5s ease-out 0s 1 slideIn" }}
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
