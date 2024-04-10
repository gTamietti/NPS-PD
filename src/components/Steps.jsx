import {AiOutlineStar} from 'react-icons/ai';
import {FiSend} from "react-icons/fi";

import "./Steps.css";

const Steps = ({currentStep}) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineStar />
        <p>Etapa 1</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Etapa 2</p>
      </div> 
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Etapa 3</p>
      </div> 
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Etapa 4</p>
      </div> 
      <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div> 
    </div>
  );
}

export default Steps