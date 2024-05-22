import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { Main, Modal, ModalButton, ModalContent } from "./HistoriaStyled.jsx";

import HistoryCard from "../../assets/components/HistoryCard/HistoryCard.jsx";
import Table from "../../assets/components/Tables/Tables.jsx";

import {
  PersonalHistory,
  ProfessionalHistory,
} from "../../assets/js/HistoryContents.js";
import { Pages } from "../../assets/js/ImageContents.js";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  
  return (
    <>
   

      <Main>
        {PersonalHistory.map((id, index) => {
          return (
            <HistoryCard
              key={index}
              title={id.title}
              image={id.image}
              description={id.description}
            />
          );
        })}

        <section id="About">
          <div id="video">
            <iframe src="https://www.youtube.com/embed/n7tge_F29HU?si=X3-RYluxW8_67BEr" frameBorder="0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              id="button"
            >
              Clique aqui para ver o histórico esportivo
            </button>

            {/*modal */}

            {isOpen && (
              <Modal isOpen={isOpen}>
                <ModalContent>
                  {Pages.map((img, index) => (
                    <img key={index} src={img.image} alt={img.alt}/>
                  ))}

                  <ModalButton
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="close-button"
                  >
                    <IoClose />
                  </ModalButton>
                </ModalContent>
              </Modal>
            )}
          </div>

          <div id="Biography">
            <div>
              <div>
                <h3>Apelido</h3>
                <span>Monstrinha</span>
              </div>

              <div>
                <h3>Data de Nascimento</h3>
                <span>22/03/1983</span>
              </div>

              <div>
                <h3>Nascido(a) em</h3>
                <span>Santo Antônio da Patrulha - RS, 95500-000, Brasil </span>
              </div>

              <div>
                <h3>Sexo</h3>
                <span>Feminino</span>
              </div>

              <div>
                <h3>Clube</h3>
                <span>Gremio Nautico União</span>
              </div>

              <div>
                <h3>Lateralidade</h3>
                <span>Destro</span>
              </div>

              <div>
                <h3>Federação</h3>
                <span>Confederação Brasileira de Esgrima</span>
              </div>

              <div>
                <h3>Tempo que pratica</h3>
                <span>10 anos</span>
              </div>
            </div>
          </div>
        </section>

        {ProfessionalHistory.map((id, index) => {
          return (
            <HistoryCard
              key={index}
              title={id.title}
              image={id.image}
              description={id.description}
            />
          );
        })}

        <section>
          <Table />
        </section>
      </Main>

    </>
  );
};

export default History;
