import { useState } from "react"

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    // console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div style={{color:"white",background:"#F1C75B",height:"53.6vh",width:"27.5vw", position:"relative", borderRadius:"12px", padding:"6px"}}>
        <p style={{color:"black",fontSize:"2rem",padding:"20px 20px"}}>All notes</p>
        <textarea style={{width:"26vw", height:"44vh",margin:"auto", border:"none",background:"transparent",marginLeft:"16px",fontSize:"21px",fontFamily:"Roboto",fontWeight:400}} value={text} onChange={(e)=>handleChange(e)}/>
       </div>
    )
}

export default Notes