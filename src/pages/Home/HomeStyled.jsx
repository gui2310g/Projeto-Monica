import styled from "styled-components";
import WorldImg from "../../assets/images/Worldmap.png"

export const Main = styled.main`

   
    // Home //

    #home {
        height: 100vh;
        overflow: hidden;
        background-color: black; 
    }

    #home img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: zoomin 5s infinite;
        transition: opacity 1s ease-in-out;
        filter: brightness(52%);
        
    }

    // History-Medals
   
    @keyframes zoomin {
        0% {
            opacity: 0;
            transform: scale(1);
        }
        20% {
            opacity: 1;
            
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1.25);
            
        }
    }

    #history-profissional {
        background-image: url(${WorldImg});
        height: auto; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 10px;
        
    }
    
    #history-profissional #history-medals {
        width: 100%;
        max-width: 800px;
        margin: 50px auto; 
        background-color: rgba(55, 255, 20, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    

    #sponsors {
        background-color: #60b02a;
        padding: 30px;
        text-align: center;
        color: white;
    }

    .ul { 
        list-style-type: none;
    }

    #sponsor {
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
    }

    #sponsor img {
         width: 200px;
    }

    #Agenda {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        height: auto;
        flex-wrap: wrap;
    }
    
    #Agenda-title {
        border-bottom: 1px solid gray;
        width: 100%;
        color: white;
        text-align: center;
        background-color: #60b02a;
        padding: 10px 0px 10px 0px;
    }
`
