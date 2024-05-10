import { Agenda, AgendaDate, AgendaText } from "./AgendaComponentStyled";

const AgendaComponent = ({date, month, name, description}) => {
    return (
        <Agenda>
                <AgendaDate>
                  <span>
                    {date} <br /> {month}
                  </span>
                </AgendaDate>

                <AgendaText>
                  <h2>{name}</h2>
                  <p>
                    {description}
                  </p>
                </AgendaText>
        </Agenda>
    )
}

export default AgendaComponent;
