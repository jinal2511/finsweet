import React,{useState} from "react";
import faqstyle from "../styles/Faq.module.css";

const Questions = (props) => {
    const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
    return(
        <>
      <div className={faqstyle.questionborder}>
          <div className={faqstyle.question} id={props.id}>
          <h6 className={faqstyle.number}>{props.number}</h6>
                <h6 className={faqstyle.faq_question} onClick={() => handleClick(props.id)}>{props.question}</h6>
                <button onClick={() => handleClick(props.id)} className="angle">
               {isActive ?(<span className={isActive ? "active" : ""}>-</span>):(<span className={isActive ? "active" : ""}>+</span> )}
                </button>
              </div>
              <div className={isActive ? "answer active" : "answer"}>
                {props.answer}
              </div>
              </div>
        </>
    )
}
export default Questions;