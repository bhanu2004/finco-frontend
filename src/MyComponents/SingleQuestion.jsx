import React, { useState } from "react";
const SingleQuestion = ({title,info})=>{
    const [showInfo, setShowInfo] = useState(false);
    return(
        <div className="paragraph">
            <div className="questn">
                <p>{title}</p>
                <button onClick={()=>{setShowInfo(!showInfo)}}>{showInfo ? <i class="fa-solid fa-minus"></i>: <i class="fa-solid fa-plus"></i>}</button>
            </div>
            <div className="ans">
                <p>{showInfo && info}</p>
            </div>
        </div>
    )
}
export default SingleQuestion;