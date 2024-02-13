import style from './LandingPage.module.css';

const LandingPage = () => {
    return(
        <div>
            <h1 className={style.title}>Henry Pokemon</h1>
            <img src="portada-pokemon.jpg" alt="pokemon app" width="600px" height="600px" style={{ width: '100%' }}/>
            <button className={style.button}>Home</button>
        </div> 
    )
}

export default LandingPage;