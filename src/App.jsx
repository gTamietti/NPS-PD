import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./App.css";

import ReviewForm from "./components/ReviewForm";
import ReviewFormSec from "./components/ReviewFormSec";
import ReviewFormThird from "./components/ReviewFormThird";
import ReviewFormFour from "./components/ReviewFormFour";

import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import { FiSend } from "react-icons/fi";
import Steps from "./components/Steps";
import { useState } from "react";


const formTemplate ={

  review: "",
  comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler=(key, value) =>{
    setData((prev)=>{
      return {...prev,[key]: value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("review1:", data.review1);
    console.log("review2:", data.review2);
    console.log("review3:", data.review3);
    console.log("review4:", data.review4);
    console.log("comment:", data.comment);
  };
  
  const formComponents = [
   
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewFormSec data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewFormThird data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewFormFour data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data} />,
  ];


  const { currentStep, currentComponent,changeStep,isLastStep,isFirstStep } = useForm(formComponents);

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
            changeStep(currentStep + 1, e)
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
                <button type="submit">
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
