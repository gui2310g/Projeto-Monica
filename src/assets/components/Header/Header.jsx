import { Headers, ImageLogo, Button } from "./HeaderStyled.jsx";
import Logo from "../../images/Logo.png"
import { FaBars } from "react-icons/fa";
import { HeaderNav } from "./HeaderNav.jsx";
import { useState, useEffect } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const NavResize = () => {
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false) 
            }
        }
        
        window.addEventListener("resize", NavResize)   

        return () => {
            window.removeEventListener("resize", NavResize);
        }
    })
    
    return (
        <Headers>
            <ImageLogo src={Logo} alt="Monica Santos Logo" />

            <HeaderNav isOpen={isOpen}/>

            <Button onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <FaBars />
            </Button>
        </Headers>


    )
}

export default Header;


