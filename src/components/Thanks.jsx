import "./Thanks.css"

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Valeu PDev!</h2>
        <p>
        Obrigado por nos avaliar, Estamos sempre trabalhando para melhorar nossas monitorias!!!
        </p>
        <p>Para concluir a sua avaliação clique no botão de Enviar abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação:</h3>
        <p className="review-data">
        <span>Satisfação com a monitoria:</span>
        </p>
        <p className="review-data">
          <span>Comentário</span>
        </p>
    </div>
  )
}

export default Thanks 