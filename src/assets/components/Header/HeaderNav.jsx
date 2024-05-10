
import { Nav, NavLink } from "./HeaderStyled.jsx";
import PropTypes from 'prop-types';

export const HeaderNav = ({ isOpen }) => {

    return (
        <Nav $isOpen={isOpen}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Historia">História</NavLink>
            <NavLink href="/Agenda">Agenda</NavLink>
            <NavLink href="/Palestra">Palestra</NavLink>
            <NavLink href="/Patrocinadores">Patrocínios</NavLink>
        </Nav>
    );
};

HeaderNav.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
};