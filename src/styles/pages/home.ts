import styled from "styled-components";

export const Container = styled.div`

  max-width: 1120px;
  margin: 0 auto;





  footer {


    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: fixed;


    a {
      padding: 0.25rem;
      img {
        width: 3rem;
        height: 3rem;
        filter: grayscale(1);
        filter: brightness(0.7) grayscale(1);
        transition: filter 0.2s;

        &:hover {
          filter: brightness(1);
        }
      }
    }
  }
`;
