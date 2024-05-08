import React, { useState } from "react";
import "./Thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const Thanks = ({data,onDropdownChange}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onDropdownChange(selectedValue)
  };

  return (
    <div className="thanks-container">
      <h2>Valeu PDev!</h2>
      <p>
        Obrigado por nos avaliar, Estamos sempre trabalhando para melhorar
        nossas monitorias!!!
      </p>
      <p>Para concluir a sua avaliação clique no botão de Enviar abaixo.</p> 
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="Select">Selecione seu monitor</option>
        <option value="Eduardo Coelho">Eduardo Coelho</option>
        <option value="Emannuel Costa">Emannuel Costa</option>
        <option value="Felipe Campos">Felipe Campos</option>
        <option value="Fernanda Sabrina">Fernanda Sabrina</option>
        <option value="Gabriel Mauro">Gabriel Mauro</option>
        <option value="Gustavo Felipe">Gustavo Felipe</option>
        <option value="João Vitor">João Vitor</option>
        <option value="Larissa Felipe">Larissa Felipe</option>
        <option value="Lucca Fernandes">Lucca Fernandes</option>
        <option value="Marcos Amatoshi">Marcos Amatoshi</option>
        <option value="Max Bagno">Max Bagno</option>
      </select>
    </div>
  );
};

export default Thanks;
