import styled from "styled-components";

export const Carrousel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    flex-direction: column;
    gap: 30px;

    iframe { 
        width: 100%;
        max-width: 700px;
        height: 400px;
    }
    
    img {
        width: 100%;
        max-width: 500px;
        height: 500px;
        object-fit: cover;
    }
    .slide {
        border-radius: 0.5rem;
        box-shadow: 0px 0px 7px #666;
    }

    .slide-hidden {
        display: none;
    }

    .arrow {
        background-color: black;
        position: absolute;
        color: white;
        width: 2rem;
        height: 2rem;
        filter: drop-shadow(0px 0px 5px #555);
        cursor: pointer;
        border-radius: 10px;
    }

    .arrow:hover {
        cursor: pointer;
    }

    .arrow-left {
        left: 20%;      
        top: 65%; 
       
    }

    .arrow-right {
        right: 20%; 
        top: 65%; 
       
    }

    .indicators {
        display: flex;
        position: absolute;
        bottom: 1rem;
    }

    .indicator {
        background-color: blue;
        height: 0.5rem;
        width: 0.5rem; 
        border-radius: 100%;
        border: none;
        outline: none;
        box-shadow: 0px 0px 5px #555;
        margin: 0 0.2rem;
        cursor: pointer; 
    }

    .indicator-inactive {
        background-color: grey;
    }

    @media screen and (max-width: 1024px) {

        video { 
            max-width: 600px;
        }

        img {
            max-width: 300px;
        }

        
        .arrow-left {
            left: 5%;                    
        }

        .arrow-right {
            right: 5%; 
        }
    }
`;
