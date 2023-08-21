import Info from '../Components/Info/Info'
import Notes from '../Components/Info/Notes'
import Timer from '../Components/Info/Timer'
import Weather from '../Components/Info/Weather'
import News from '../Components/Info/News'
import { useNavigate } from 'react-router-dom'
const Information = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/entertainment')
    }
    return (
        <div style={{height:"100vh",width:"100vw",background:"black",paddingLeft:"6vh",paddingTop:"6vh",boxSizing:"border-box"}}>
            <div style={{display:"flex",gap:"20px"}}>
                <div>
                    <Info/>
                    <Weather/>
                    <Timer/>
                </div>
                <div>
                    <Notes/>
                </div>
                <div>
                    <News/>
                </div>
            </div>
            <button style={{position:"absolute",bottom:"2vh",right:"6vw",background:"green",border:"none",color:"white",padding:"12px 30px",borderRadius:"22px",fontSize:"20px"}} onClick={handleClick}>Browse</button> 
        </div>
    )
}

export default Information
