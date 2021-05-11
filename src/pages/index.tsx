import { GetStaticProps } from "next";
import { ClassificationTable } from "../components/ClassificationTable";
import { MatchCard } from "../components/MatchCard";
import { api } from "../services/api";
import { Container } from "../styles/pages/home";
import { ClassificationProps } from "../types";

export default function Home({positions}: ClassificationProps) {
  
  return (
    <Container>
      {/* <ClassificationTable positions={positions} />
       */}

      <MatchCard />

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
    headers: {
      'Authorization': 'Bearer ' + process.env.BEARER_TOKEN
    }
  }
  
  const { data } = await api.get("v1/campeonatos/10/tabela", config);

  const positions = data.map((tp) => {
    return {
      posicao: tp.posicao,
      pontos: tp.pontos,
      time: {
        time_id: tp.time.time_id,
        nome_popular: tp.time.nome_popular,
        sigla: tp.time.sigla,
        escudo: tp.time.escudo,
      },
      jogos: tp.jogos,
      vitorias: tp.vitorias,
      empates: tp.empates,
      derrotas: tp.derrotas,
      gols_pro: tp.gols_pro,
      gols_contra: tp.gols_contra,
      saldo_gols: tp.saldo_gols,
      aproveitamento: tp.aproveitamento,
      variacao_posicao: tp.variacao_posicao, 
    };
  });


  const teste = await api.get("v1/campeonatos/10/tabela", config);

  return {
    props: {
      positions
    },
    revalidate: 60 * 60 * 8,
  }
}