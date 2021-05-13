import { GetStaticProps } from "next";
import { ClassificationTable } from "../components/ClassificationTable";
import { MatchCard } from "../components/MatchCard";
import { api } from "../services/api";
import { Container } from "../styles/pages/home";
import { ClassificationProps } from "../types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useClassification } from "../context/ClassificationContext";

export default function Home({positions}: ClassificationProps) {
  
  const {setPositions} = useClassification();
  setPositions(positions);

  return (
    <Container>
    {/* <main>
    <section className="matchRound">
        
        <div className="">
          <a href="#"><FiChevronLeft /></a>
          <h2>Rodada 1</h2>
          <a href=""><FiChevronRight /></a>
        </div>
   
        
        
        <div className="cards">
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
      </section>
      
      <section className="classification">
        <h2>Classificação</h2>
        <ClassificationTable positions={positions} />
      </section>
    </main>
    

    */}

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