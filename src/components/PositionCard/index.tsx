import { Container } from "./style";

type Team = {
  time_id: number;
  nome_popular: string;
  sigla: string;
  escudo: string;
};

type Position = {
  posicao: number;
  pontos: number;
  time: Team;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
};

type ClassificationProps = {
  position: Position;
};

export function PositionCard({position}: ClassificationProps){
  return (
    <Container>
      <span>{position.posicao}</span>
      
      <img src={position.time.escudo} alt={position.time.nome_popular} />
      <span>{position.time.nome_popular}</span>
      <span>{position.pontos}pts</span>

    </Container>
  )

}