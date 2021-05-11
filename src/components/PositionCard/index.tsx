import { Container } from "./style";
import{ PositionCardProps } from "../../types";

export function PositionCard({position}: PositionCardProps){
  return (
    <Container>
      <span>{position.posicao}</span>
      
      <img src={position.time.escudo} alt={position.time.nome_popular} />
      <span>{position.time.nome_popular}</span>
      <span>{position.pontos}pts</span>
    </Container>
  )

}