import styled from "styled-components";

export const Footers = styled.footer`
    background-color: #23242E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    #logo {
        width: 250px;
        object-fit: cover;
        
    }

    .ul { 
        list-style-type: none;
    }

    #social {
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    #social img{
         width: 50px;
    }

    p {
        color: white;
    }
`
