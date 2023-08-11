import React, { useState } from "react";

function MainSection(props) {
    const [text,changeText]=useState("Enter text")
    const toUpper=()=>{
        changeText(text.toLocaleUpperCase())
        console.log(props)
    }
    const textinc=(event)=>{
        changeText(event.target.value)
    }
    const myStyle1={
        color:"white",
        backgroundColor:"#4d5959"
    }
    const myStyle2={
        color:"black",
        backgroundColor:"white"
    }
  return (
      <div class="form-floating container my-3" style={props.mode==="Light Mode"?myStyle2:myStyle1}>
        <h3>Enter Your Text Here</h3>
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          onChange={textinc}
          style={{height:"200px",border:"2px solid blue",padding:"12px"}}
          value={text}
        ></textarea>
        <button type="button" class={`btn btn-${props.mode==="Light Mode"?"primary":"warning"} my-2`} onClick={toUpper}>Convert to upperCase</button>
        <div className="preview">
            {text}
        </div>
      </div>

  );
}

export default MainSection;
