import styled from "styled-components";

export const Container = styled.div`

  background: #ffffff;
  width: 350px;
  height: 4rem;
  border-radius: 0.50rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
  color: #484747;
  font-size: 1.25rem;
  font-weight: bold;

  img {
    width: 3rem;
    padding: 0.25rem;
  }

  span:first-child{
    font-size: 2rem;
    padding: 0.5rem;
  }
  span:last-child{
    font-size: 1.5rem;
    padding: 1rem;
  }
`;