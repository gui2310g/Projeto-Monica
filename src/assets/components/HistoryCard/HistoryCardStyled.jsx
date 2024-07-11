import styled from "styled-components";

export const Card = styled.section`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 500px;
  gap: 20px;

  #history {
    display: flex;
    flex-direction: column;
    background-color: green;
    width: 70%;
    align-items: center;
    clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
    box-sizing: border-box; 
    animation: showdiv 2s;
  }

  #history h1 {
    margin-top: 20px;
    animation: showTextandImg 2s;
  }

  #history p {
    text-align: justify;
    width: 100%;
    max-width: 600px;
    font-weight: bold;
    margin: 50px;
    animation: showTextandImg 2s;
  }

  #image {
    flex-grow: 1;
  }

  #image img {
    width: 100%;
    max-width: 350px;
    height: 450px;
    object-fit: cover;
    border-radius: 20px;
    margin-top: 20px;
    animation: showTextandImg 2s;
  }

  @keyframes showdiv {
    0% {
      width: 0%;
      opacity: 0;
    }

    100% {
      width: 70%;
      opacity: 1;
    }
  }

  @keyframes showTextandImg {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

 


  @media screen and (max-width: 1250px) {

    flex-direction: column-reverse;
    height: auto;
    width: 100%;
    gap: 0px;

    #history {
      clip-path: none;
      margin-right: 0px;
      animation: none;
      width: 100%;
    }

    #image img {
      max-width: 100%;
      margin: 0;
      object-fit: cover;
      border-radius: 0px;
      animation: showTextandImg 1s;
    }

    
  }
`;
