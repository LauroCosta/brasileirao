import { PositionCard } from "../PositionCard";
import { Container, Table } from "./style";

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
  positions: Position[];
};

export function ClassificationTable({ positions }: ClassificationProps) {
  return (
    <Container>
      {positions.map((position) => {
        return (
          <PositionCard position={position} />
        )
      })}
    </Container>
  );

  // <Table>
  //   <thead>
  //     <tr>
  //       <th></th>
  //       <th>Clube</th>
  //       <th>Pts</th>
  //       <th>VIT</th>
  //       <th>E</th>
  //       <th>DER</th>
  //       <th>GP</th>
  //       <th>GC</th>
  //       <th>SG</th>
  //     </tr>
  //   </thead>

  //   <tbody>
  //     {positions.map((position) => {
  //       return (
  //         <tr key={position.posicao}>
  //           <td>{position.posicao}</td>
  //           <td style={{ width: 220 }}>
  //             <img
  //               src={position.time.escudo}
  //               alt={position.time.nome_popular}
  //             />
  //             <span>{position.time.nome_popular}</span>
  //           </td>
  //           <td>{position.pontos}</td>
  //           <td>{position.vitorias}</td>
  //           <td>{position.empates}</td>
  //           <td>{position.derrotas}</td>
  //           <td>{position.gols_pro}</td>
  //           <td>{position.gols_contra}</td>
  //           <td>{position.saldo_gols}</td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </Table>
}
