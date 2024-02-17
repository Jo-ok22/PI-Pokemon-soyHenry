import SearchBar from '../searchbar/SearchBar';
import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <div>
            <h1>este es el Home</h1> 
            <SearchBar/>
            <Link to='/detail'>
            <button>Detail</button>
            </Link>
        </div>
    )
}

export default Home