import styled from "styled-components";

export const Headers = styled.header`
    background-color: #23242E;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-around;
    max-width: 100%; 
    
`;

export const ImageLogo = styled.img`
    width: 200px;
    object-fit: cover;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        position: absolute;
        background-color: #23242E;
        border-top: 1px solid gray;
        top: 92px;
        flex-direction: column;
        width: 100%;
        padding: 10px 0px 10px 0px;
        display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
        z-index: 1;
        
    }
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        color: #717171;
        transition: 0.5s;
    }
`;

export const Button = styled.button`
    color: white;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;
