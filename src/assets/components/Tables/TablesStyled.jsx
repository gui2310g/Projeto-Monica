import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  #medals {
    width: 50px;
  }

  tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.625em;
    text-align: center;
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 450px) {
    #medals {
      width: 20px;
    }
  }
`;

export const SmallTable = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
  
  text-align: center;
  height: 200px;
`;

export const Tables = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;

  caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }
`;
