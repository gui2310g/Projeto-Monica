import { useEffect, useState } from "react";

import { Main } from "./HomeStyled.jsx";

import Table from "../../assets/components/Tables/Tables.jsx";
import AgendaComponent from "../../assets/components/Agenda/AgendaComponent.jsx";

import { BackgroundImages } from "../../assets/js/ImageContents.js";
import { Sponsors } from "../../assets/js/SponsorsContents.js";
import { Dates } from "../../assets/js/DateContents.js";

const Home = () => {
  const [images, setImages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => (prev + 1) % BackgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Main>
        <section id="home">
          {BackgroundImages.map((Image, index) => (
            <img
              key={index}
              src={Image.image}
              alt={`background photo ${index}`}
              style={{ display: index === images ? "block" : "none" }}
            />
          ))}
        </section>

        <section id="sponsors">
          <h1>Patrocinadores</h1>

          <div>
            <ul className="ul" id="sponsor">
              {Sponsors.map((Sponsor, index) => {
                return (
                  <li key={index}>
                    <a href={Sponsor.link} target="_blank">
                      <img src={Sponsor.image} alt={Sponsor.alt} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="history-profissional">
          <div id="history-medals">
            <Table />
          </div>
        </section>

        <section id="Agenda">
          <div id="Agenda-title">
            <h1>Agenda</h1>
          </div>

          {Dates.map((Date, index) => {
            return (
              <AgendaComponent
                key={index}
                date={Date.date}
                month={Date.month}
                name={Date.name}
                description={Date.description}
              />
            );
          }).slice(0, 1)}

          <a href="/Agenda">Clique aqui para ver a agenda completa</a>
        </section>
      </Main>
     
    </>
  );
};

export default Home;
