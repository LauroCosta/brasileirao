import { Container } from "./style";

export function MatchCard() {
  return (
    <Container>
      <div className="dateMacth">
        <span>11/02/2021</span>
      </div>

      <div className="macth">
        <span>ACG</span>
        <div className="circle">
          <img
            src="https:/apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999db078911.svg"
            alt=""
          />
        </div>
        <span>X</span>
        <div className="circle">
          <img
            src="https:/apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg"
            alt=""
          />
        </div>
        <span>COR</span>
      </div>

    </Container>
  );
}
