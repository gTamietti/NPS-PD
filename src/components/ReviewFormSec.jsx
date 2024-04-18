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
       “Quão úteis foram os atendimentos para esclarecer suas dúvidas, numa escala de 0 a 10?”
      </p>
      </div>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" 
            value="detrator1" 
            name="review" 
            required 
            checked={data.review2 === "detrator1"}
            onChange={(e)=>updateFieldHandler("review2",e.target.value)}
            />
            <BsFillEmojiFrownFill />
            <p>1-3</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="detrator" 
            name="review" 
            required 
            checked={data.review2 === "detrator"}
            onChange={(e)=>updateFieldHandler("review2",e.target.value)}
            />
            <BsFillEmojiNeutralFill />
            <p>3-6</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="neutro" 
            name="review" 
            required 
            checked={data.review2 === "neutro"}
            onChange={(e)=>updateFieldHandler("review2",e.target.value)}
            />
            <BsFillEmojiSmileFill />
            <p>7-8</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="promotor"
             name="review" 
             required 
            checked={data.review2 === "promotor"}
            onChange={(e)=>updateFieldHandler("review2",e.target.value)}
             />
            <BsFillEmojiHeartEyesFill />
            <p>9-10</p>
          </label>
        </div>
      </div>
    );
  }
  
  export default ReviewForm