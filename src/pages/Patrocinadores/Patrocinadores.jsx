
import { Main } from "./PatrocinadoresStyled.jsx";

import { Sponsors } from "../../assets/js/SponsorsContents.js";
import { SponsorCard, SponsorImage, SponsorText } from "./PatrocinadoresStyled.jsx";

const Sponsor = () => {
    return (
        <>
            <Main>
                {Sponsors.map((Sponsor, index) => {
                    return (
                        <SponsorCard key={index}>
                            <SponsorImage>
                                <img src={Sponsor.image} alt={Sponsor.alt} />
                            </SponsorImage>

                            <SponsorText>
                                <p>{Sponsor.description}</p>
                            </SponsorText>
                        </SponsorCard>
                        )
                    })
                }
            </Main>
        </>
    )
}

export default Sponsor;

