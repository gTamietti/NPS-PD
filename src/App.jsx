import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';
import "./App.css";

import ReviewForm from "./components/ReviewForm";
import ReviewFormSec from "./components/ReviewFormSec";
import ReviewFormThird from "./components/ReviewFormThird";
import ReviewFormFour from "./components/ReviewFormFour";
import ReviewFormFive from './components/ReviewFormFive';
import ReviewFormSix from './components/ReviewFormSix'

import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import Steps from "./components/Steps";

const formTemplate = {
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const [sentiment, setSentiment] = useState(null); // Estado para armazenar o resultado da análise de sentimento

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const sendComment = async (comment) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze_sentiment', { comment });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleSubmit = async () => {
    setSentiment(null);
    await sendComment(data.comment); //recebe o comentário
    console.log("review1:", data.review1); //respostas das perguntas armazenadas
    console.log("review2:", data.review2);
    console.log("review3:", data.review3);
    console.log("review4:", data.review4);
    console.log("comment:", data.comment);
    console.log("sentiment:", sentiment); // Exibe o resultado da análise de sentimento do codigo Pln.py
    console.log("");
  };
  
    //usa o data para receber o valor de review e comment
  const formComponents = [
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,     
    <ReviewFormSec data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFormThird data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFormFour data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFormFive data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFormSix data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents);

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Projeto Desenvolve</h2>
          <p>
            Responda a nossa pergunta para sabermos como podemos melhorar
          </p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => {
            if (!isLastStep) {
              changeStep(currentStep + 1, e);
            } else {
              handleSubmit(e);
            }
          }}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious /> 
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit" onClick={handleSubmit}>
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button" onClick={handleSubmit}>
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
