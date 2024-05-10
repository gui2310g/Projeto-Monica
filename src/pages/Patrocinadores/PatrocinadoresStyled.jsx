import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 20px 0px 20px 0px;
`

export const SponsorCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #60b02a;    
    align-items: center;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
`

export const SponsorImage = styled.div`
    background-color: #23242E;
    width: 100%;
    text-align: center;
    img {
        width: 300px;
    }
 
`
export const SponsorText = styled.div`
    text-align: justify;
    padding: 10px;
    color: white;
`