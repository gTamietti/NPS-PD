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
       “Em uma escala de 0 a 10, o quanto você recomendaria o curso a um amigo ou colega?”
      </p>
      </div>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" 
          value="unsatisfied" 
          name="review" 
          required 
          checked={data.review1 === "unsatisfied"}
          onChange={(e)=>updateFieldHandler("review1",e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>1-3</p>
        </label>
        <label className="radio-container">
          <input type="radio" 
          value="neutral" 
          name="review" 
          required 
          checked={data.review1 === "neutral"}
          onChange={(e)=>updateFieldHandler("review1",e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>3-6</p>
        </label>
        <label className="radio-container">
          <input type="radio" 
          value="satisfied" 
          name="review" 
          required 
          checked={data.review1 === "satisfied"}
          onChange={(e)=>updateFieldHandler("review1",e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>7-8</p>
        </label>
        <label className="radio-container">
          <input type="radio" 
          value="very_satisfied"
           name="review" 
           required 
          checked={data.review1 === "very_satisfied"}
          onChange={(e)=>updateFieldHandler("review1",e.target.value)}
           />
          <BsFillEmojiHeartEyesFill />
          <p>9-10</p>
        </label>
      </div>
    </div>
  );
}

export default ReviewForm