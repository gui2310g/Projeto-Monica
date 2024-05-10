
import AgendaComponent from "../../assets/components/Agenda/AgendaComponent.jsx";

import { Main } from "./AgendaPageStyled.jsx";

import { Dates } from "../../assets/js/DateContents.js";
const Agenda = () => {
  return (
    <>
      <Main>
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
        })}
      </Main>
    </>
  );
};

export default Agenda;
