import { Link, NavLink } from 'react-router-dom'; 
import style from './LandingPage.module.css';

const LandingPage = () => {
    return(
        <div>
            <h1 className={style.title}>Henry Pokemon</h1>
            <img src="fondo-blanco.png" alt="pokemon app" height="600px" style={{ width: '90%' }}/>
            <Link to='/home'>
            <button className={style.button}>Home</button>
            </Link>
        </div> 
    )
}

export default LandingPage;