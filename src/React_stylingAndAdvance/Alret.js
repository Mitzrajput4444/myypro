import React from 'react'


export default function Alret (p) {
    const capitalizes =(word)=>{
        const newText = word.toLowerCase();
        return newText.charAt(0).toUpperCase() + newText.slice(1);
    }
   
  return (
    p.alret &&
 <div className={`alert alert-${p.alret.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalizes(p.alret.type) }</strong> :{p.alret.msg} 
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
</div>
    

  )
}
