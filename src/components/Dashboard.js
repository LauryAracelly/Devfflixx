import NavigationBar from './NavigationBar';
import Profile from './Profile';
import { useAuth } from '../contexts/authContext';
import { useTheme } from '../contexts/themeContext';
import { button } from "react-bootstrap";
import Personaje from './Personaje';
import Personajes from './Personajes';



import { ThemeProvider } from 'react-bootstrap';

function Dashboard() {

  const { toggle, handleToggle } = useTheme();

  return (
    <>
      <NavigationBar />
      <h2 className="display-4 text-center m-5"> Devflix 🎬 </h2>
      <div className={ `header ${toggle ? 'dark' : 'light' }` }>
      <h3 className="display-4 text-center m-5">🍥Lo mas visto🍥</h3>
      <button class="btn btn-primary" type="button" value="Input" className={ `boton ${toggle ? 'dark' : 'light' }` } onClick={ handleToggle }>Cambiar tema: { toggle ? 'Dark' : 'Light' }</button>
    </div>
    <div className={ `main ${toggle ? 'dark' : 'light' }` }>
        <h1 className="display-4 text-center m-5">💉Requiem For a Dream 💊</h1>
        <p>Naruto es un ninja de Konoha y forma parte del Equipo 7, compuesto por Sasuke Uchiha, Sakura Haruno y su líder y sensei, Kakashi. narra la historia de un ninja adolescente llamado Naruto Uzumaki, cuyo sueño es convertirse en Hokage</p>
        <div class="card" style={{width: '30rem', margin: '0 auto'}}>
            <img src="https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" class="card-img-top" alt="zorro"></img>
            <div class="card-body">
                <p class="card-text">Ver Ahora</p>
            </div>
        </div>
    </div>
    <Personajes />
    </>
  )
}

export default Dashboard