import { useClassification } from "../../context/ClassificationContext";
import { Container } from "./style";

export function Header() {
  const {positions} = useClassification();
  return (  
      <Container>
        <div className="content">
          <div className="logo">
            <img src="/logo_brasileirao.png" alt="Brasileirão" />
            <strong>BRASILEIRÃO 2021</strong>
          </div>
          <h1>teste</h1>
        </div>

        <div className="teams">
          {positions.map(position => {
            return(
              <a href="">
                <img src={position.time.escudo} alt={position.time.nome_popular} />
              </a>
            )
          })}
        </div>
      </Container>

  )

}