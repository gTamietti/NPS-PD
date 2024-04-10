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
       “”
      </p>
      </div>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" 
            value="unsatisfied" 
            name="review" 
            required 
            checked={data.review4 === "unsatisfied"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiFrownFill />
            <p>1-3</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="neutral" 
            name="review" 
            required 
            checked={data.review4 === "neutral"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiNeutralFill />
            <p>3-6</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="satisfied" 
            name="review" 
            required 
            checked={data.review4 === "satisfied"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
            />
            <BsFillEmojiSmileFill />
            <p>7-8</p>
          </label>
          <label className="radio-container">
            <input type="radio" 
            value="very_satisfied"
             name="review" 
             required 
            checked={data.review4 === "very_satisfied"}
            onChange={(e)=>updateFieldHandler("review4",e.target.value)}
             />
            <BsFillEmojiHeartEyesFill />
            <p>9-10</p>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea
            name="comment"
            id="comment"
            placeholder="Insira aqui sua sincera opinião sobre o curso"
            required
            value={data.comment || ""}
            onChange={(e)=>updateFieldHandler("comment",e.target.value)}
          ></textarea>
        </div>
      </div>
    );
  }
  
  export default ReviewForm