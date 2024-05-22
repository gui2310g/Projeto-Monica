import styled from "styled-components";

export const Main = styled.main`

    // About // 
    #About {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 20px;
            gap: 30px;
            align-items: center;
    }
    
    #video {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
    }

    #video #button {
            background-color: #23242E;
            width: 340px; 
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
            font-size: 15px;
            height: 40px;
            border-radius: 50px;
    }

    #video #button:hover {
            color: yellow;
            transition: all 1s;
    }
        
    iframe {
        width: 700px; 
        height: 400px;   
    }

    #About #Biography {
            max-width: 20%;
            background-color: orange;
            padding: 20px;
            width: 100%;
            color: white;
        
    }

    #About #Biography div {
            margin-top: 10px;
    }

    @media screen and (max-width: 1024px) {

        #About {
                flex-direction: column;
        }
            

        #About #Biography {
                max-width: 90%;
                padding-left: 50px;
        }
    }

    @media screen and (max-width: 768px) {
        iframe {
            width: 340px;
        }
        
    }
`

export const Modal = styled.div`

    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    position: fixed;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow-y: auto; 
    overflow-x: hidden;  
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%; 
        
    img {
        width: 100%;
        max-width: 600px;
        margin-top: 20px;
        height: auto;
    }

     @media screen and (max-width: 1024px) {
        img {
                width: 400px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
                width: 300px;
        }
    }
`

export const ModalButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 30px;
    position: fixed;
    top: 30px;
    right: 50px;
    cursor: pointer;
    z-index: 2;
`

