import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  height: 10rem;
  background: #ffff;
  border-radius: 0.5rem;
  border: 1px solid #ededed;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }


  .dateMacth {
    margin-bottom: 1rem;
    
    span {
      color: #404040;
      font-size: 1rem;
    }
  }

  .macth {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  
    span {
      font-weight: bolder;
      color: #404040;
      font-size: 1.25rem;
      padding: 0.5rem;
    }

    .circle {
      background: #ffffff;
      height: 4rem;
      width: 4rem;
      border-radius: 100%;
      border: 1px solid #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 2.5rem;
      }
    }
  }
`;
