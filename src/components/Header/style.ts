import styled from "styled-components";

export const Container = styled.header`
  
  background: #ffff;
  height: 5rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;

  .content {
    width: 70%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {

      display: flex;
      align-items: center;
    
      img {
        width: 4rem;
        height: 4rem;
      }

      strong {
        padding-left: 1rem;
        font-size: 1.5rem;
        color: #0049A9;
      }
    }

  }

  .teams {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5rem;
    position: relative;
    background: #cbcbcb;
    padding: 0.5rem 1rem;
    border-radius: 0 0 2rem 2rem;

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
