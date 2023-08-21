import { useEffect, useState } from "react"
import styles from './Movies.module.css'
const List = ({genre})=>{
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd8bb0aa01dmshad050a25d0a0925p112f4fjsn09e6db865193',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4,4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[])
    return(
        <>
        <p className={styles.heading}>{genre}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                console.log(movie?.primaryImage?.url)
                return (
                <div key={idx} style={{width:"20vw",margin:"0vw",marginRight:"0vw"}}>
                    <img src={movie?.primaryImage?.url} style={{objectFit:"cover", width:"16vw", height:"16vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default List