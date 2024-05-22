import { MedalImages } from "../../js/ImageContents.js";
import { Section, SmallTable, Tables } from "./TablesStyled.jsx";

const Table = () => {
  return (
    <>
      <h1 id="title">Quadro de Medalhas</h1>
      <Section>
        
        <SmallTable>
          <thead>
            <tr>
              <th></th>

              <th>Florete</th>
              <th>Espada</th>
              <th>Sabre</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {MedalImages.map((Image, index) => (
                <td key={index}>
                  <img src={Image.image} alt={Image.alt} id="medals" />
                </td>
              )).slice(0, 1)}
              <td>33</td>
              <td>15</td>
              <td>5</td>
              <td>56</td>
            </tr>

            <tr>
              {MedalImages.map((Image, index) => (
                <td key={index}>
                  <img src={Image.image} alt={Image.alt} id="medals" />
                </td>
              )).slice(1, 2)}
              <td>8</td>
              <td>6</td>
              <td>1</td>
              <td>15</td>
            </tr>

            <tr>
              {MedalImages.map((Image, index) => (
                <td key={index}>
                  <img src={Image.image} alt={Image.alt} id="medals" />
                </td>
              )).slice(2)}

              <td>7</td>
              <td>15</td>
              <td>10</td>
              <td>32</td>
            </tr>
          </tbody>
        </SmallTable>

        <Tables>
          <thead>
            <tr>
              <th>Campanhas de Destaque</th>

              {MedalImages.map((Image, index) => (
                <th key={index}>
                  <img src={Image.image} alt={`image ${index}`} id="medals" />
                </th>
              ))}

              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Copa Brasil de Paraesgrima 2024</td>
              <td>3</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2023</td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Satellite Cup 2023</td>
              <td>2</td>
              <td>1</td>
              <td>-</td>
              <td>3</td>
            </tr>

            <tr>
              <td>American Championships 2022</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2022</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Copa do Mundo de Paraesgrima 2022</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Satellite Cup 2021</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Copa do Mundo de Paraesgrima 2020</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2015</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>American Championships 2015</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2014</td>
              <td>2</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2013</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2012</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Copa Brasil de Paraesgrima 2012</td>
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2011</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2011</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>1</td>
            </tr>

            <tr>
              <td>American Championships 2011</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
            </tr>

            <tr>
              <td>Campeonato Brasileiro de Paraesgrima 2010</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </Tables>
      </Section>
    </>
  );
};

export default Table;
