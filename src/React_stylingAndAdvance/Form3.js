import React, {useState} from 'react'

export default function Form3(p) {
const [text,setText] = useState ("");
 const handleUper = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    p.setShow("UpperCase SuccessFully...!","success")

 }
 const handleLower =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    p.setShow("LowerCase SuccessFully...!","success")
 }
 const handleonchange = (e) => {
   setText(e.target.value)
}
const handleCopy = () =>{
  let mttext = document.getElementById("mybox")
  mttext.select()
  navigator.clipboard.writeText(mttext.value);
  p.setShow("Copyied SuccessFully...!","success")

}
const handleExtraspace = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  p.setShow("Extra Space Remove SuccessFully...!","success")

}



  return (
   <>
  <div className="container">
 
<div className="mb-3">
    <h2>Enter Your Text Below</h2>
  <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleonchange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUper}>UpperCase</button>
<button className="btn btn-primary" onClick={handleLower}>LowerCase</button>
<button className="btn btn-primary mx-2" onClick={()=>setText("")}>Reset</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary " onClick={handleExtraspace}>Extra Space Remove</button>
<p className='my-2'>Your Charachter is: <strong>{text.length} </strong>And Words is: <strong>{text.split(" ").length}</strong></p>
<p>{text === ""?"":0.008 * text.split(" ").length} Minutes Read Time:</p>
<h2>Preview:</h2>
<p>{text.length > 0?text:"Please Enter Your Text To Preview Here"}</p>
  </div>

   </>
  )
}

