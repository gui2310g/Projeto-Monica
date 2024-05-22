import { SocialMedias } from "../../js/ImageContents.js";
import { Footers } from "./FooterStyled.jsx";
import Logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <Footers>
      <div>
        <img src={Logo} alt="Monica Santos foto" id="logo" />
      </div>

      <ul className="ul" id="social">
        {SocialMedias.map((Social, index) => {
          return (
            <li key={index}>
              <a href={Social.link} target="_blank">
                <img src={Social.image} alt={Social.alt} />
              </a>
            </li>
          );
        })}
      </ul>

      <p>Desenvolvido por Guilherme Fontes Campo</p>
    </Footers>
  );
};

export default Footer;
