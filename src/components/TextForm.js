import React , {useState} from 'react'

export default function TexthtmlForm(props) {

  const bodyBg = window.getComputedStyle(document.body).backgroundColor;

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleUpClick = ()=>{
    setText(text.toUpperCase())
    props.showAlert("Converted to upperCase!", "success")
  }

  const handleDownClick = ()=>{
    setText(text.toLowerCase())
    props.showAlert("Converted to lowerCase!", "success")
  }

  const handleClearClick = ()=>{
  setText(" ")
  props.showAlert("Text is cleared!", "success")
  }

  const handleCopyClick = ()=>{
  navigator.clipboard.writeText(text)
  alert("Copied to clip board")
  }

  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

    const [text, setText] = useState("");
    
return (
<>

  <div className="container mb-3 mt-3"> 
    <h2 style= {{color: props.mode==='light'?'black':'white'}}>{props.heading}</h2>
    <textarea rows="8" cols="150" value= {text} onChange= {handleOnChange} style = {{backgroundColor:props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}></textarea>
  <button type="submit" className="btn  mx-1" onClick = {handleUpClick} style= {{backgroundColor: 'blue', color: "white" }}>Convert to upper case</button>
  <button type="submit" className="btn  mx-1" onClick = {handleDownClick} style= {{backgroundColor: bodyBg, color: "white" }}>Convert to lower case</button>
  <button type="submit" className="btn  mx-1" onClick = {handleClearClick} style= {{backgroundColor: bodyBg, color: "white" }}>Clear Text</button>
  <button type="submit" className="btn  mx-1" onClick = {handleCopyClick} style= {{backgroundColor: bodyBg, color: "white" }}>Copy to Clipboard</button>
  <button type="submit" className="btn  mx-1" onClick = {handleExtraSpaces} style= {{backgroundColor: bodyBg, color: "white" }}>Remove Extra Spaces</button>
    </div>

      <div className="conatiner" style= {{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:"Enter the text above in the text box to preview here"}</p>
      </div>
</>
)
}
