import { GetStaticProps } from "next";
import { ClassificationTable } from "../components/ClassificationTable";
import { api } from "../services/api";
import { Container } from "../styles/pages/home";
import { ClassificationProps } from "../types";

export default function Home({positions}: ClassificationProps) {
  
  return (
    <Container>
      <ClassificationTable positions={positions} />
      
      <footer>
        {positions.map(position => {
          return(
            <a href="">
              <img src={position.time.escudo} alt={position.time.nome_popular} />
            </a>
          )
        })}

      </footer>

    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const config = {
    params: {
      _sort: "pontos",
      _order: "desc",
    },
    headers: {
      'Authorization': 'Bearer ' + process.env.BEARER_TOKEN
    }
  }
  
  const { data } = await api.get("v1/campeonatos/10/tabela", config);

  const positions = data.map((tablePosition) => {
    return {
      posicao: tablePosition.posicao,
      pontos: tablePosition.pontos,
      time: {
        time_id: tablePosition.time.time_id,
        nome_popular: tablePosition.time.nome_popular,
        sigla: tablePosition.time.sigla,
        escudo: tablePosition.time.escudo,
      },
      jogos: tablePosition.jogos,
      vitorias: tablePosition.vitorias,
      empates: tablePosition.empates,
      derrotas: tablePosition.derrotas,
      gols_pro: tablePosition.gols_pro,
      gols_contra: tablePosition.gols_contra,
      saldo_gols: tablePosition.saldo_gols,
      aproveitamento: tablePosition.aproveitamento,
      variacao_posicao: tablePosition.variacao_posicao, 
    };
  });

  return {
    props: {
      positions
    },
    revalidate: 60 * 60 * 8,
  }
}