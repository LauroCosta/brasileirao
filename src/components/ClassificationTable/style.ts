import styled from "styled-components";


export const Container = styled.div`
  width: 500px;
  height: 50vh;
  overflow-y: scroll;

  display: flex;
  align-items: center;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0;            
  }
`
export const Table = styled.table`
  border-collapse: collapse;


  height: 700px;
  background: red;
  div {
    padding: 2rem;
  }


  th,
  td {
    padding: 0.25rem 1rem;
    border-bottom: 1px solid #e6e8eb;
  }

  tr {
    margin: 1rem;
    background: #f3f3f3;

    td {
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;
