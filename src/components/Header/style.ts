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
`;
