import{
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from "react-icons/bs"
  
  import "./ReviewForm.css"
  
  
  const ReviewForm = ({data,updateFieldHandler}) => {
    return (
      <div className="review-form">
      <div className="text-container">
      <p>
       “Qual é sua pontuação de 0 a 10 para a disponibilidade dos monitores em responder suas dúvidas fora das sessões de atendimento?”
      </p>
      </div>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" 
            value="detrator" 
            name="review" 
            required 
            checked={data.review4 === "detrator"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiFrownFill />
            <p>1-3</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="detrator1" 
            name="review" 
            required 
            checked={data.review4 === "detrator1"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiNeutralFill />
            <p>3-6</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="neutro" 
            name="review" 
            required 
            checked={data.review4 === "neutro"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiSmileFill />
            <p>7-8</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="promotor"
             name="review" 
             required 
            checked={data.review4 === "promotor"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
             />
            <BsFillEmojiHeartEyesFill />
            <p>9-10</p>
          </label>
        </div>
      </div>
    );
  }
  
  export default ReviewForm