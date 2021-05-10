type Team = {
  time_id: number,
  nome_popular: string,
  sigla: string,
  escudo: string,
}

type Position = {
  posicao: number,
  pontos: number,
  time: Team,
  jogos: number,
  vitorias: number,
  empates: number,
  derrotas: number,
  gols_pro: number,
  gols_contra: number,
  saldo_gols: number,
  aproveitamento: number,
  variacao_posicao: number,
}

export type ClassificationProps = {
  positions: Position[];
}

export type PositionCardProps = {
  position: Position;
};