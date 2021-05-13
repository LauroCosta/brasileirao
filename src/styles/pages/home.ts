import styled from "styled-components";

export const Container = styled.div`

  max-width: 1120px;
  margin: 0 auto;

  header {
   background: #ffffff;
   height: 4rem;
  }

  h2 {
    color: #888888;
    font-weight: 100;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  main {
    display: flex;
    justify-content: space-between;

    .matchRound {
    
      .cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem
      }
    }
  }


  footer {

  }
`;
