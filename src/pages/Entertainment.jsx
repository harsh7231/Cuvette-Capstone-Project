import List from "../Components/Entertainment/Movies"
import Profile from '../Assests/profileSmall.png'
import { useNavigate } from 'react-router-dom'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("genres"))
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/categories')
    }
    return(
        <>
        <img src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}}/>
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{color:"green",fontSize:"3rem",margin:"1vw",fontWeight: "400px", fontFamily: 'Single Day'}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List genre={movie}/>)}
        </div>
        <button style={{position:"absolute",bottom:"2vh",right:"6vw",background:"green",border:"none",color:"white",padding:"12px 30px",borderRadius:"22px",fontSize:"20px"}} onClick={handleClick}>Browse</button>
        </>
    )
}


export default Movies