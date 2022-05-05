import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
    const [text,changetext] = useState("");
    const [copy, setCopy] = useState("Copy Text");
    function handle(event){
      changetext(event.target.value);
    }
    function lowerText(){
      changetext(text.toLowerCase());
      props.alert("Converted To Lower Case!")
    }
    function upperText(){
      changetext(text.toUpperCase());
      props.alert("Converted To Upper Case!")
    }
    function clearText(){
      changetext("");
      props.alert("Cleared!")
    }
    const copyText =()=>{
      var text = document.getElementById("floatingTextarea");
      text.select();
      navigator.clipboard.writeText(text.value)
      setCopy("Text Copied!");
      setInterval(() => {
        setCopy("Copy Text");
      }, 2000);
      props.alert("Copied To Clipboard!")
    }
    const removeExtraSpacesText=()=> {
      let splited_sentence = text.split(" ");
      let arranged_sentence = "";
      for (let index = 0; index < splited_sentence.length; index++) {
          if(splited_sentence[index]!= ""){
              arranged_sentence = arranged_sentence+splited_sentence[index]+" ";
          }
      }
      changetext(arranged_sentence);
      props.alert("Removed Extra Space!")
    }
    const arrangeText=()=>{
      let splited_sentence = text.split(". ");
      let arranged_sentence = "";
      for (let index = 0; index < splited_sentence.length; index++) {
          arranged_sentence = arranged_sentence+splited_sentence[index].charAt(0).toUpperCase()+splited_sentence[index].slice(1,splited_sentence[index].length);
          arranged_sentence = arranged_sentence+". ";
      }
      changetext(arranged_sentence);
      props.alert("Arranged To Pragraph Text Format!")
    }
    const headingText=()=>{
      let splited_sentence = text.split(" ");
      let arranged_sentence = "";
      for (let index = 0; index < splited_sentence.length; index++) {
          arranged_sentence = arranged_sentence+splited_sentence[index].charAt(0).toUpperCase()+splited_sentence[index].slice(1,splited_sentence[index].length);
          arranged_sentence = arranged_sentence+" ";
      }
      changetext(arranged_sentence);
      props.alert("Arranged To Heading Text Format!")
    }
  return (
      <>
<div className="container my-2">
  <div className="form-floating">
    <textarea style={props.mode==="dark"?{color:"white",backgroundColor:"grey"}:{color:"black",backgroundColor:"#efefef"}} className="form-control" onChange={handle} value={text} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label style={props.mode==="dark"?{color:"white"}:{color:"black"}} htmlFor="floatingTextarea">{props.textboxHeading}</label>
  </div>
  <div className="buttons">
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1`} onClick={lowerText}>Convert to LowerCase</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1 mx-1`} onClick={upperText}>Convert to UpperCase</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1`} onClick={clearText}>Clear Text</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1 mx-1`} onClick={copyText}>{copy}</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1`} onClick={removeExtraSpacesText}>Remove Extra Spaces</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1 mx-1`} onClick={arrangeText}>Arrange Text</button>
    <button className={`btn btn-${props.mode==="dark"?"light":"dark"} my-1`} onClick={headingText}>Heading Text</button>
  </div>
</div>
<div className="container">
  <h1>Your Stats:</h1>
  <p>Number of Characters: {text.length}, Number of Words: {text.split(" ").length} and Number of Spaces: {(text.split(" ").length)-1}</p>
  <p>It Will Take You {0.008*text.split(" ").length} minutes to read this.</p>
  {text!=""?<h2>Preview:</h2>:''}
  <p className='i'>{text}</p>
</div>
      </>
  )
}

Textbox.defaultProps={
textboxHeading:"Your Text Here"
};