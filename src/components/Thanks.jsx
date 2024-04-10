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
    </div>
  )
}

export default Thanks 