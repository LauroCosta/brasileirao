import styled from "styled-components";

export const Container = styled.div`

  max-width: 1120px;
  margin: 0 auto;

  header {
   background: #ffffff;
   height: 4rem;
  }

  footer {


    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: fixed;
    background: #cbcbcb;
    padding: 0.5rem 1rem;
    border-radius: 2rem 2rem 0 0;

    a {
      padding: 0.25rem;
      img {
        width: 3rem;
        height: 3rem;
        filter: grayscale(1);
        filter: brightness(0.8);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(1);
          padding-bottom: 0.25rem;
        }
      }
    }
  }
`;
